// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const requestPromise = require('request-promise');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Don't really neeed this
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


var foodGR = [3]
		//add elements to the array
		foodGR[0] = {
    title:'Chatfuel Rockets Jersey',
    image_url:'https://rockets.chatfuel.com/assets/shirt.jpg',
    subtitle:`Size: M`   
};
		foodGR[1] = "λίγα σύννεφα";
		foodGR[2] = "αραιή συννεφιά";

var c = {
    title:'Chatfuel Rockets Jersey',
    image_url:'https://rockets.chatfuel.com/assets/shirt.jpg',
    subtitle:`Size: M`   
}
var c1 = "buttons";
c[c1] = [];
foodGR[0][c1] = [];

var btn = {
  type:"element_share"
};


var data2 = {
    sampleTime: '1450632410296',
    data: '78.15431:0.5247617:-0.20050584'
};

c[c1].push(btn);
foodGR[0][c1].push(btn);

app.get('/setmenu', (request, response) => {
  console.log("kati");
  response.json({});
});

app.get('/showmenu', (request, response) => {
 
var responseData = {  
      };
  
  
    responseData = {
 "messages": [
    {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "image_aspect_ratio": "square",
          "elements": [c, foodGR[0]
          ]
        }
      }
    }
  ]
};


  console.log(responseData);
    response.json(responseData);
 
});

