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
    object = params.raw ? object : getStructuredContent(contentItem.title, object);
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

function getStructuredContent(title, object) {
  let structuredContent = [];

  let currentSection = { 
    heading: title,
    content: []
  };

  object.child.forEach(element => {
    if (element.node == "text") return; 

    switch (element.tag) {
      case "h2":
      case "h3":
        structuredContent.push(currentSection);
        currentSection = { 
          heading: element.child[0].text,
          content: []
        };
        break;

      case "p":
        currentSection.content.push(getText(element));
        break;

      case "div":
        currentSection.content.push(getStructuredContent(currentSection.heading, element));
        break;

      case "ul":
      case "ol":
        currentSection.content.push(getListItems(element));
        break

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
    else if ( child.node == "element" ) itemText += getText(child); 
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
