const saveCartItems = (htmlItem) => localStorage.setItem('cartItems', htmlItem);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
