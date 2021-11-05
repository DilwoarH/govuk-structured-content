'use strict';
require('encoding');
const html2json = require('html2json').html2json;
const axios = require('axios');

exports.handler = function(event, context, callback) {
  console.log('DATE! ', (new Date()));
  let params = event.queryStringParameters;
  let path = params.path;
  if (!path) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({error: "Please provide a path for example, ?path=/benefits-calculators"})
    });
  }

  let url = `https://www.gov.uk/api/content${path}`;
  console.log('URL', url);

  axios
  .get(url)
  .then(result => {
    let contentItem = result.data;
    let html = contentItem.details.body;//.replace(/(\r\n|\n|\r)/gm, "");
    let object = html2json(html);
    object = params.raw ? object : getStructuredContent(contentItem.title, object, 1);
    let json = JSON.stringify(object);
    callback(null, {
      statusCode: 200,
      body: json
    });
  })
  .catch(e => {
    callback(e);
  });
}

function getStructuredContent(title, object, heading_level) {
  let structuredContent = [];

  let currentSection = {
    heading_level: heading_level, 
    heading: title,
    content: []
  };

  object.child.forEach(element => {
    if (element.node == "text") return; 

    switch (element.tag) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
        structuredContent.push(currentSection);
        currentSection = { 
          heading_level: parseInt(element.tag.slice(-1)),
          heading: getText(element),
          content: []
        };
        break;

      case "div":
        currentSection.content.push(getStructuredContent(currentSection.heading, element, currentSection.heading_level));
        break;

      case "p":
        currentSection.content.push(getText(element));
        break;

      case "ul":
      case "ol":
        currentSection.content.push(getListItems(element));
        break;

      case "table":
        currentSection.content.push(getTableContent(element));
        break;

      case "aside":
        currentSection.content.push(getText(element));
        break;

      default:
        currentSection.content.push(element);
        break;
    }
  });

  structuredContent.push(currentSection);
  return structuredContent;
}

function getText(element) {
  let itemText = "";

  element.child.forEach( child => {
    if (child.node == "text") itemText += child.text;
    else if ( child.tag == "a" ) itemText += `[${getText(child)}](${child.attr.href})`; 
    else if ( child.node == "element" ) itemText += getText(child) + " "; 
  });

  return itemText.trim();
}

function getListItems(list) {
  let items = [];
  list.child.forEach( item => {
    if (item.tag == "li") items.push(getText(item));
  });
  return items;
}

function getTableContent(table) {
  let result = [];
  table.child.forEach( element => {
    if (element.tag == "tbody") {
      element.child.forEach( row => {
        if (row.tag == "tr") {
          let result_row = [];
          row.child.forEach( column => {
            if (column.tag == "td") {
              result_row.push(getText(column));
            }
          })
          result.push(result_row);
        }
      });
    }
  });


  return result;
}