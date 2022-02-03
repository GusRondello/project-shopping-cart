require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('fetchItem é uma `function`', async () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Se ao chamar a função fecthItem("MLB1615760527"), a função fetch é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('Se ao chamar a função fetchItem("MLB1615760527"), a função fetch utiliza o endpoit certo', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Se o retorno de fetchItem("MLB1615760527") é uma estrutuda de dados igual a "item"', async () =>{
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Se ao ser chamada sem argumento retorna um erro com a mensagem esperada', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
