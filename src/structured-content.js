'use strict';
require('encoding');
const html2json = require('html2json').html2json;
const axios = require('axios');

let url = "https://www.gov.uk/api/content/guidance/software-developer";

exports.handler = function(event, context, callback) {
  console.log('DATE! ' + (new Date()));
  console.log('URL! ' + url);

  axios
  .get(url)
  .then(result => {
    let content_item = result.data;
    let html = content_item.details.body.replace(/(\r\n|\n|\r)/gm, "");
    let object = html2json(html);
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
