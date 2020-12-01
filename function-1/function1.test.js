const { getName } = require('./function1.js');

describe('get name function', () => {
  it('test will confirm if function returns name property from an object', () => {
    const object = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' }
    expect(getName(object)).toEqual('Aang');
  });

  it('test will confirm if function returns name property from an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' }
    expect(getName(spot)).toEqual('spot');
  });

});