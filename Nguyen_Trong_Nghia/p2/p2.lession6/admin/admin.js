async function onCreateProduct(event) {
  event?.preventDefault();
  localStorage.removeItem("selectedProductId");
  onEditProduct();
}

async function onEditProduct() {
  var productId = document.getElementById("productId").value;
  var productName = document.getElementById("productName").value;
  var productPrice = document.getElementById("productPrice").value;
  var productImageFiles = document.getElementById("productImage").files;
  var productImageFile =
    productImageFiles.length > 0 ? productImageFiles[0] : null;
  var productImage;
  if (productImageFile) {
    productImage = await toBase64(productImageFile);
  }

  var newProduct = { productName, productPrice, productId, productImage };

  var storeProducts = getStoreProducts();
  var selectedProductId = document.getElementById("selectedProductId");
  if (selectedProductId) {
    storeProducts = storeProducts.map((product) =>
      product.productId === selectedProductId ? newProduct : product
    );
  } else {
    storeProducts.push(newProduct);
  }
  localStorage.setItem("products", JSON.stringify(storeProducts));

  // CLOSE MODAL
  $("#exampleModal").modal("hide");

  loadProductsToHtml(storeProducts);
}

function getStoreProducts() {
  return JSON.parse(localStorage.getItem("products") || "[]");
}

function loadProductsToHtml(products) {
  var productsElement = document.getElementById("products");
  var productsHtml = "";
  for (var i = 0; i < products.length; i++) {
    var currentProduct = products[i];
    productsHtml += `
      <div class="product d-flex gap-3" >
        <img src=${currentProduct.productImage} class="product__productImg"/>
        <div class"d-flex gap-2">
        <p class="product__title">${currentProduct.productName}</p>
        <p class="product__price">${currentProduct.productPrice}</p>

        <button type="button" class="btn btn-warning" onclick="onClickUpdateProduct('${`${currentProduct.productId}`}')">Sửa</button>
        <button type="button" class="btn btn-danger" onclick="onClickDeleteProduct('${i}')">Xóa</button>
        </div>
        </div>
    `;
  }
  productsElement.innerHTML = productsHtml;
}

function onClickUpdateProduct(productId) {
  // console.log(productId);
  $("#exampleModal").modal("show");
  localStorage.setItem("selectedProductId", productId);

  var products = getStoreProducts();
  var filterProducts = products.filter(
    (product) => product.productId === productId
  );
  var selectedProduct = null;
  if (filterProducts.length > 0) {
    selectedProduct = filterProducts[0];
  }

  if (selectedProduct) {
    $("#productId").val(selectedProduct.productId);
    $("#productName").val(selectedProduct.productName);
    $("#productPrice").val(selectedProduct.productPrice);
  }
}

function onClickDeleteProduct(index) {
  var products = getStoreProducts();
  var filterProducts = products.filter(
    (_, i) => i !== index
  );
  localStorage.setItem("products", JSON.stringify(filterProducts));
  loadProductsToHtml(filterProducts);
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

loadProductsToHtml(getStoreProducts());
