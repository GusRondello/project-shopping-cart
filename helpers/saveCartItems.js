const saveCartItems = (htmlItem) => {
 const storageItems = localStorage.setItem('cartItems', htmlItem); 
 return storageItems;
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
