const { getName } = require('./function1.js');

describe('get name function', () => {
  it('test will confirm if function returns name property from an object', () => {
    const object = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' }
    expect(getName(object)).toEqual('Aang');
  });  
});