'use strict';
require('encoding');
const html2json = require('html2json').html2json;
const fetch = require('node-fetch');

let url = "https://www.gov.uk/api/content/guidance/software-developer";

exports.handler = function(event, context, callback) {
  console.log('DATE! ' + (new Date()));
  fetch(url)
  .then(res => res.json())
  .then(content_item => {
    let html = content_item.details.body.replace(/(\r\n|\n|\r)/gm, "");
    let object = html2json(html);
    let json = JSON.stringify(object, null, 2);
    callback(null, {
      statusCode: 200,
      body: json
    });
  })
  .catch(e => {
    callback(e);
  });
}
