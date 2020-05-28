const html2json = require('html2json').html2json;
const fetch = require('node-fetch');

let url = "https://www.gov.uk/api/content/guidance/software-developer";

fetch(url)
  .then(res => res.json())
  .then(content_item => {
    let html = content_item.details.body.replace(/(\r\n|\n|\r)/gm, "");
    let object = html2json(html);
    let json = JSON.stringify(object, null, 2);
    console.log(json);
  });



