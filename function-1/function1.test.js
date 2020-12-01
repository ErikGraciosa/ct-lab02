

describe('get name function', () => {
  it('test will confirm if function returns name property from an object', () => {
    expect(getName(object)).toEqual('Aang');
  });  
});