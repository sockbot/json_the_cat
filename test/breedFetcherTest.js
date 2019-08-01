const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe("#fetchBreedDescription", () => {
  
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      assert.equal(err, null);
      assert.equal(desc, expectedDesc);
      
      done();
    })
  })
  
  it("returns an error for an invalid breed, via callback", (done) => {
    fetchBreedDescription('asdf', (err, desc) => {

      assert.equal(err, `Breed name asdf not found`);
      assert.equal(desc, null);

      done();
    })
  })
})