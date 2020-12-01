const request = require('superagent');
const { fetchQuotes } = require('./function4.js');

describe('Test verifies that function returns a single quote with expected format', () => {
  it('Test verifies that function returns a single quote with expected format', async () => {
    const objectFormat = {
        character: expect.anything(),
        quote: expect.anything(),
        image: expect.anything()        
      }
    expect(await fetchQuotes()).toEqual(objectFormat);
  });
});