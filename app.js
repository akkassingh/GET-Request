function hit(){
var store;
var request = require('request');
var fs = require("fs");
request.get('https://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) // Show the HTML for the Google homepage. 
  }
  store=body;
  // console.log(body);
var writeStream = fs.createWriteStream("home.html");
writeStream.write(store);
});
}
module.exports= hit;   
