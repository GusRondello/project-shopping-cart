const fetchItem = async (id) => {
  const idUrl = `https://api.mercadolibre.com/items/${id}`;
  try {
    const response = await fetch(idUrl);
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
