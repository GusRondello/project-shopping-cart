const listaItens = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  if (event.target.className === 'cart__item') { 
    event.target.remove(); 
  }
} // Essa função remove o item clicado do cart (entendi o paramentro do if correto com ajuda do Lucas Leal na mentoria do 2 dia)

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const renderProducts = async () => {
  const computers = await fetchProducts();
  const { results } = computers;
  results.forEach((element) => listaItens.appendChild(createProductItemElement(element)));
}; // Essa função retorna meus itens na tela (Tive ajuda da Ana na mentoria do dia 1)

const addToCart = async (event) => {
  const selectedItem = event.target.parentNode;
  const itemId = getSkuFromProductItem(selectedItem);
  const addProduct = await fetchItem(itemId);
  cartItems.appendChild(createCartItemElement(addProduct));
  saveCartItems(cartItems.innerHTML);
}; // Essa função coloca os itens que foram clicados no botão "Adicionar ao carrinho" no carrinho (Consegui entender o event Target graças ao Leo Araujo)

window.onload = async () => { 
  cartItems.innerHTML = getSavedCartItems(); // com a ajuda do Imar Mendes consegui retornar o valor coreto para o cartItems
  await renderProducts(); // renderizamos os produtos na tela
  const buttonAdd = document.querySelectorAll('.item__add'); // selecionamos o botão criado e adicionamos o item que é clicado no carrinho
  buttonAdd.forEach((button) => { button.addEventListener('click', addToCart); });
  cartItems.addEventListener('click', cartItemClickListener);// removemos o item da lista do carrinho
}; 
