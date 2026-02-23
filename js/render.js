// render.js
function createProductCard(product) {
  return `
    <div class="card">
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button class="btn btn-secondary">Adicionar</button>
    </div>
  `;
}

const container = document.getElementById("product-list");
container.innerHTML = products.map(createProductCard).join("");