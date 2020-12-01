const { copyAndPush } = require('./function2.js');

describe('copy array and push to end of array function', () => {
  it('test will confirm function returns original array and if new item at the end', () => {
    arr = [1, 2, 3, 4]
    expect(copyAndPush(arr, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('test will confirm function returns original array and if new item at the end', () => {
    anotherArr = [1, 2, 3, 4]
    expect(copyAndPush(anotherArr, 'Jim')).toEqual([1, 2, 3, 4, 'Jim']);
  });

});