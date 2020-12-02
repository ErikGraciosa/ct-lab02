const request = require('superagent');
const { fetchQuotes } = require('./function4.js');
jest.mock('superagent');


describe('Test verifies that function returns a single quote with expected format', () => {
  it('Test verifies that function returns a single quote with expected format', async () => {
    request.get.mockResolvedValue({
        body: [
            {
                character: expect.anything(),
                quote: expect.anything(),
                image: expect.anything()   
            },
            {
                character: expect.anything(),
                quote: expect.anything(),
                image: expect.anything()   
            }
        ]
    })

    const objectFormat = {
        character: expect.anything(),
        quote: expect.anything(),
        image: expect.anything()        
      }
    expect(await fetchQuotes()).toEqual(objectFormat);
  });
});