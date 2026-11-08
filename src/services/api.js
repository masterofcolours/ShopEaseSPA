async function getData() {
  try {
    const response = await fetch('/src/services/products.json');

    const data = await response.json();

    return data;
        
  } catch (error) {

  }
}

export default getData;