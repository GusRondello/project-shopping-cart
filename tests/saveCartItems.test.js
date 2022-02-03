const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  const expected = '<ol><li>Item</li></ol>'
  it('Com o argumento "<ol><li>Item</li></ol>" o método localStorage.setItem', () => {
    saveCartItems(expected)
    expect(localStorage.setItem).toBeCalled();
  });
  it ('Com o argumento "<ol><li>Item</li></ol>" o método localStorage.setItem é chamado com dois parametros: "cartItems" e o segundo sendo o argumento passado', () => {
    saveCartItems(expected)
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', expected);
  });
});
