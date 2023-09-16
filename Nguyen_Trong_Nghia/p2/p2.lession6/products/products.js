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

function onCreateProduct(event) {
  event.preventDefault();
  var productName = document.getElementById("productName").value;
  var productPrice = document.getElementById("productPrice").value;
  var product = { productName, productPrice };

  var storeProducts = getStoreProducts();
  storeProducts.push(product);
  localStorage.setItem("products", JSON.stringify(storeProducts));
  loadProductsToHtml(storeProducts);
}

loadProductsToHtml(getStoreProducts());
