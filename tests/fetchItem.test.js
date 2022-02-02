require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('fetchItem é uma `function`', async () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Se ao chamar a função fecthItem("MLB1615760527"), a função fetch é chamada', async () => {
    await fecthItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
});
