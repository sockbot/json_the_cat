const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (error) {
      // console.log("Error:", error);
      callback(error, null);
    } else if (JSON.parse(body).length === 0) {
      // console.log("JSON.parse(body)[0] === undefined)")
      callback(`Breed name ${breedName} not found`, null);
    } else {
      callback(null, JSON.parse(body)[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };