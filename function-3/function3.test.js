const { capitalizeAndFilter } = require('./function3.js');

describe('Test verifies that function that takes an array of strings and capitalizes all strings and filters out and string that starts with the letter f', () => {
  it('test will verify strings are capitalized and no strings starting with f', () => {
    arr = ['spot', 'rover', 'bingo', 'fred']
    expect(capitalizeAndFilter(arr)).toEqual(['SPOT', 'ROVER', 'BINGO']);
  });
});