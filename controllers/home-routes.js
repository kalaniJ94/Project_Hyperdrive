const router = require('express').Router();
const { User } = require('../models');
const apiKey = '3db7fef6c0msh02dc16734cc3a68p1497c9jsn2626d897910e';

// const loggedIn = require('../utils/'); --> imports authentication function once created 

// functions
function getPlanetData(selectedPlanet) {
    var apiUrl = 'https://api.api-ninjas.com/v1/planets?name=' + planetName;

    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error");
        }
      });
}

module.exports = router;