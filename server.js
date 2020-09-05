const express = require("express");
const cors = require('cors')
var bodyParser = require('body-parser');
var harrowInf= require("./Harrow.json")
const app = express();
const port =process.env.PORT|| 3001;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', function(request, response) {
   // response.sendFile(__dirname + '/index.html');
   response.json({
       "/pharmcies": "retruns an array of pharmacies in a specific area",
       "/colleges":"returns colleges list for stratford",
"/doctors":"returns doctors list for stratford",
"/hospitals":"returns hospitals list for stratford"
       
    });
   
});
app.get('/pharmcies', function(request, response) {
    // response.sendFile(__dirname + '/index.html');
    response.json(harrowInf.pharmacies)
});
app.get('/doctors', function(request, response) {
    // response.sendFile(__dirname + '/index.html');
    response.json(harrowInf.doctors)
});

app.get('/hospitals', function(request, response) {
    // response.sendFile(__dirname + '/index.html');
    response.json(harrowInf.hospitals)
});
app.get('/colleges', function(request, response) {
    // response.sendFile(__dirname + '/index.html');
    response.json(harrowInf.colleges)
});
  app.listen(port, () => console.log(`[MockServer] listening at http://localhost:${port}`));
