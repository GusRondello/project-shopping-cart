const fetchItem = async (idSelecionado) => {
  const selectedUrl = `https://api.mercadolibre.com/items/${idSelecionado}`;
  try {
    const response = await fetch(selectedUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
