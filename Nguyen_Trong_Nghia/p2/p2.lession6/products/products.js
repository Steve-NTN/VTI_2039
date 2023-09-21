function getStoreProducts() {
  return JSON.parse(localStorage.getItem("products") || "[]");
}

function loadProductsToHtml(products) {
  var productsElement = document.getElementById("products");
  var productsHtml = "";
  for (var i = 0; i < products.length; i++) {
    var currentProduct = products[i];
    productsHtml += `
      <div class="product">
          <p class="product__title">${currentProduct.productName}</p>
          <p class="product__price">${currentProduct.productPrice}</p>
        </div>
    `;
  }
  productsElement.innerHTML = productsHtml;
}


loadProductsToHtml(getStoreProducts());
