var products = document.getElementById("products");

var productsHtml = "";
for (var i = 0; i < productsData.length; i++) {
  var currentProduct = productsData[i];
  productsHtml += `
   <div class="product">
   <img src="${currentProduct.productImage}" alt="img" class="product__image" />
   <p class="product__title">${currentProduct.productName}</p>
   <p class="product__brand">${currentProduct.prodcutBrand}</p>
   <div class="product__pricebox">
     <p class="product__price">${currentProduct.productPrice}</p>
     <i class="fa fa-shopping-cart" aria-hidden="true"></i>
   </div>
 </div>
   `;
}

products.innerHTML = productsHtml;
