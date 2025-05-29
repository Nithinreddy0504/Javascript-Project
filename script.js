
document.addEventListener("DOMContentLoaded", () => {
  // --- Search Suggestion Logic ---
  const suggestionsBox = document.getElementById('suggestions');
  const searchBox = document.getElementById('search-box');
  const suggestionsList = ['Shirt', 'Trousers', 'Shoes', 'Dresses', 'Tops', 'Accessories'];

  function performSearch() {
    const query = searchBox.value.toLowerCase();
    if (!query) {
      suggestionsBox.style.display = 'none';
      return;
    }

    const results = suggestionsList.filter(item => item.toLowerCase().includes(query));
    displaySuggestions(results);
  }

  function displaySuggestions(results) {
    if (results.length === 0) {
      suggestionsBox.style.display = 'none';
      return;
    }

    suggestionsBox.innerHTML = results.map(item => `<div onclick="selectSuggestion('${item}')">${item}</div>`).join('');
    suggestionsBox.style.display = 'block';
  }

  window.selectSuggestion = function (value) {
    searchBox.value = value;
    suggestionsBox.style.display = 'none';
  }

  document.addEventListener('click', (e) => {
    if (e.target !== searchBox) {
      suggestionsBox.style.display = 'none';
    }
  });

  searchBox.addEventListener("input", performSearch);





  // Cart Count Logic
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById('cart-count').innerText = cart.length;

  function addToCart(item) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${item.name} added to cart`);
  }

    
});



