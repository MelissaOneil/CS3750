const express = require('express'); // import express
const app = express(); // initialize express
const fakeWeatherData = require('./data.js'); //imports fake data
//trying to solve cors problem
const cors = require('cors');

//Get Route
app.get ('/weather', function(req, res){
  //store query parameter in a CityName variable
  if (!req.query.city){
    res.send({"status":"error", "message":"please enter a city name"})
  } 
  let cityName = req.query.city.toLowerCase();
  //loop through fake data array
  for (let i = 0; i < fakeWeatherData.length; i++){
    // if no city parameter exitst
    if(cityName == fakeWeatherData[i].city.toLowerCase()){
      res.send (fakeWeatherData[i])
    }
      //city isnt in the data
      res.send({"status":"error", "message":"city data is not available" + cityName})
    }
})


// Listen on port 3000
app.listen(3000, function() {
  console.log('listening on port 3000...');
})
