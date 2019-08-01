const request = require('request');
const args = process.argv.splice(2);

const breed = args[0];

request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
  if (error) {
    // console.log("Error:", error);
    console.log("Request failed. Check the URL?")
    return error;
  } else {
    console.log("Response:", response.statusCode);
    const jsonBody = JSON.parse(body);
    console.log("Body:", body);
    if (jsonBody[0]) {
      console.log(jsonBody[0].description)
    } else {
      console.log("Breed not found")
    }
  }
})
