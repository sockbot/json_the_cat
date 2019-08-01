const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.splice(2);
const breed = args[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (desc.length === 0) {
    console.log(`Breed name ${breed} not found`);
  } else {
    // console.log(typeof desc);
    console.log(desc);
  }
});
