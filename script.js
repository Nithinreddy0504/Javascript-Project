// document.addEventListener("DOMContentLoaded", () => {
//     // Search functionality
//     const suggestionsBox = document.getElementById('suggestions');
//     const searchBox = document.getElementById('search-box');
//     const suggestionsList = ['Shirt', 'Trousers', 'Shoes', 'Dresses', 'Tops', 'Accessories'];
    
//     function performSearch() {
//         const query = searchBox.value.toLowerCase();
//         if (!query) {
//             suggestionsBox.style.display = 'none';
//             return;
//         }
    
//         const results = suggestionsList.filter(item => item.toLowerCase().includes(query));
//         displaySuggestions(results);
//     }
    
//     // Show suggestions
//     function displaySuggestions(results) {
//         if (results.length === 0) {
//             suggestionsBox.style.display = 'none';
//             return;
//         }
    
//         suggestionsBox.innerHTML = results.map(item => `<div onclick="selectSuggestion('${item}')">${item}</div>`).join('');
//         suggestionsBox.style.display = 'block';
//     }
    
//     // Select suggestion
//     function selectSuggestion(value) {
//         searchBox.value = value;
//         suggestionsBox.style.display = 'none';
//     }
    
//     // Hide suggestions when clicking outside
//     document.addEventListener('click', (e) => {
//         if (e.target !== searchBox) {
//             suggestionsBox.style.display = 'none';
//         }
//     });
//     //--------------------------------------------------------------- 


// // Persistent Cart Counter
// let cartCount = localStorage.getItem('cartCount') || 0;
// document.getElementById('cart-count').innerText = cartCount;

// // Increment cart count
// function addToCart() {
//     cartCount++;
//     localStorage.setItem('cartCount', cartCount);
//     document.getElementById('cart-count').innerText = cartCount;
// }
// })

// async function fetchProducts(){
//     const response=await fetch("http://localhost:3000/data")
//     const data=await response.json()
//     console.log(data)

// } 
// fetchProducts()

// data.forEach((item) => {
//     const productContainer = document.createElement("div");
//     productContainer.classList.add("product");

//     const productImage = document.createElement("img");
//     productImage.src = item.image;
//     productImage.alt = item.name;

//     const productName = document.createElement("h3");
//     productName.innerText = item.name;

//     const productPrice = document.createElement("p");
//     productPrice.innerText = `$${item.price}`;

//     const addToCartButton = document.createElement("button");
//     addToCartButton.innerText = "Add to Cart";
//     addToCartButton.onclick = addToCart;

//     productContainer.appendChild(productImage);
//     productContainer.appendChild(productName);
//     productContainer.appendChild(productPrice);
//     productContainer.appendChild(addToCartButton);

//     // document.getElementById("products").appendChild(productContainer);
// })

// document.body.appendChild(productContainer);    



// // -------------------------------------------------------------------------------------


// let parent=document.createElement("div")


// data.map((val)=>{
//   let child=document.createElement("div");
//   let img=document.createElement("img");
//   let name=document.createElement("h1");
//   let price=document.createElement("div")
//   let description=document.createElement("div");
//   let category=document.createElement("div");
//   let btn=document.createElement("button")



//   btn.innerText="add to cart";
//   btn.style.marginLeft="20%"
//   btn.style.backgroundColor="green"
  
  

//   img.src=val.image;

//   title.innerText=val.title;

//   price.innerText="$"+val.price;
//   description.innerText=val.description;
//   category.innerText="category:"+ val.category;
//   child.classList.add("demo");


//   btn.addEventListener("click",function(){
//     child.remove()
//   })

//   child.append(img,title,category,description,price,btn)
//   parent.append(child)
//   document.body.append(parent)


// })
// document.body.append(parent)
// console.log(parent)

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

  // --- Cart Count Logic ---
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById('cart-count').innerText = cart.length;

  function addToCart(item) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${item.name} added to cart`);
  }

  // --- Fetch and Render Products ---
  async function fetchProducts() {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();

    const parent = document.getElementById("products");
    console.log(parent);
    parent.innerHTML = ""; // clear existing content

    data.forEach((item) => {
      const child = document.createElement("div");
      child.classList.add("product");

      const img = document.createElement("img");
      img.src = item.image;

      const name = document.createElement("h1");
      name.innerText = item.name;

      const price = document.createElement("div");
      price.innerText = `$${item.price}`;

      const description = document.createElement("div");
      description.innerText = item.description;

      const category = document.createElement("div");
      category.innerText = `Category: ${item.category}`;

      const btn = document.createElement("button");
      btn.innerText = "Add to Cart";
      btn.style.backgroundColor = "green";
      btn.addEventListener("click", () => addToCart(item));

      child.append(img, name, category, description, price, btn);
      parent.appendChild(child);
    });
  }

  fetchProducts();
});

