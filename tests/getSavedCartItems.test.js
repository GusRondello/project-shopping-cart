const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it ('Quando executada o método "localStorage.getItem" é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toBeCalled();
  });
  it ('O método "localStorage.getItem" é chamado com "cartItems" como parâmetro', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
