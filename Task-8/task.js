let allProducts = [];
let filteredProducts = [];

// Fetch Data
async function fetchProducts() {
  try {
    document.getElementById("loader").style.display = "block";

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    allProducts = data;
    filteredProducts = data;

    displayProducts(data);

    document.getElementById("loader").style.display = "none";
  } catch (err) {
    document.getElementById("loader").style.display = "none";
    document.getElementById("error").textContent = "Error loading data";
  }
}

// Display Products
function displayProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}" />
      <h3>${p.title.slice(0, 20)}...</h3>
      <p>${p.description.slice(0, 60)}...</p>
      <button class="price-btn">₹ ${p.price}</button>
      <button class="view-btn" onclick="viewDetails(${p.id})">View More</button>
    `;

    container.appendChild(card);
  });
}

// Search Filter
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  filteredProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  applyFilters();
});

// Category Filter
document.getElementById("category").addEventListener("change", applyFilters);

function applyFilters() {
  const category = document.getElementById("category").value;

  let temp = [...filteredProducts];

  if (category !== "all") {
    temp = temp.filter(p => p.category === category);
  }

  displayProducts(temp);
}

// Sorting
function sortProducts(type) {
  let sorted = [...filteredProducts];

  if (type === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
}

// View Details (Modal)
function viewDetails(id) {
  const product = allProducts.find(p => p.id === id);

  const modal = document.getElementById("modal");
  const modalData = document.getElementById("modalData");

  modalData.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.image}" style="height:150px" />
    <p>${product.description}</p>
    <h3>₹ ${product.price}</h3>
    <p><b>Category:</b> ${product.category}</p>
  `;

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// Init
fetchProducts();