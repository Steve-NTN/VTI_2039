$(document).ready(function name() {
  var products = $("#products");

  var productData = [
    { productName: "Oppo 52", productBrand: "Oppo", productPrice: 25000 },
    { productName: "Oppo 12", productBrand: "Oppo", productPrice: 25000 },
    { productName: "Oppo 2", productBrand: "Samsung", productPrice: 25000 },
    { productName: "Oppo 42", productBrand: "Oppo", productPrice: 25000 },
  ];

  for (var i = 0; i < productData.length; i++) {
    var currentProduct = productData[i];

    products.append(`
    <div class="product">
      <p>${currentProduct.productName}</p>
      <p>${currentProduct.productPrice}</p>
    </div>
    `);

    // products.append(
    //   "<div class='product'>" + currentProduct.productName + "</div>"
    // );
  }

  // productData.map(product)
});
