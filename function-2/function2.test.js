const { copyAndPush } = require('./function2.js');

describe('copy array and push to end of array function', () => {
  it('test will confirm function returns original array and if new item at the end', () => {
    
    expect(copyAndPush(arr, 5)).toEqual(...arr, 5);
  });

  it('test will confirm function returns original array and if new item at the end', () => {
    
    expect(copyAndPush(arr, 'Jim')).toEqual(...arr, 'Jim');
  });

});