require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('fetchProducts é uma `function`', async () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Se ao chamar a função fetchProducts("computador"), a função fetch é chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Se ao chamar a função fetchProducts("computador"), a função fetch utiliza o endpoit certo', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Se o retorno de fetchProducts("computador") é uam estrutura de dados igual a computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Se ao ser chamada sem argumento retorna um erro com a mensagem esperada', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
