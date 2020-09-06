const express = require("express");
const cors = require('cors')
var bodyParser = require('body-parser');
var Harrow= require("./Harrow.json");
var Heathrow= require("./Heathrow.json");
var Stratford= require("./Stratford.json")

const app = express();
const port =process.env.PORT|| 3002;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); 
const cities=["Harrow","Heathrow","Stratford"]
app.get('/', function(request, response) {
   // response.sendFile(__dirname + '/index.html');
   response.json({
       "/pharmcies": "retruns an array of pharmacies in a specific area",
       "/colleges":"returns colleges list for stratford",
"/doctors":"returns doctors list for stratford",
"/hospitals":"returns hospitals list for stratford"
       
    });
   
});
app.get('/:city', function(request, response) {
    const cityName= request.params.city;
    
  
  if(cities.includes(cityName)){
  
    response.json(eval(cityName))
}
});
app.get('/:city/pharmacies', function(request, response) {
    const cityName= request.params.city;
  if(cities.includes(cityName)){
  const city=eval(cityName)
    response.json(city.pharmacies)
}
});
app.get('/:city/doctors', function(request, response) {
    const cityName= request.params.city;
    if(cities.includes(cityName)){
        const city=eval(cityName)
            response.json(city.doctors)}
});

app.get('/:city/hospitals', function(request, response) {
    const cityName= request.params.city;
    if(cities.includes(cityName)){
        const city=eval(cityName)
        response.json(city.hospitals)}
});
app.get('/:city/colleges', function(request, response) {
    const cityName= request.params.city;
    
    if(cities.includes(cityName)){
        const city=eval(cityName)
        response.json(city.colleges)}
});
  app.listen(port, () => console.log(`[MockServer] listening at http://localhost:${port}`));
