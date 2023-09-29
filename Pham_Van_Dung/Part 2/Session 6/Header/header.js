function getStoreProducts() {
    return JSON.parse(localStorage.getItem("Products") || "[]");
  }

function loadProductsToHtml(listProducts){ 
    var str = "" ; 
    listProducts.forEach((product , i) => {
        str += 
        `
            <section class="Products-item">
                <img class="Products-img" src="${product.image}" alt="">
                <h3>${product.name}</h3>
                <p>Hãng sản xuất: ${product.manufacturer}</p>
                <p style="color: red;">${product.price}đ</p>
                <a>${product.star}<i class="bi bi-star-fill"  style="color: yellow;"></i></a>
                <button class="button-add">
                    <i class="bi bi-cart-plus-fill basket" style="font-size: 25px; color: red;"></i>
                </button>
            </section>
        `;
    });
    document.getElementById("Product").innerHTML = str ; 
} 

function onclick_save(){
    var name = document.getElementById("input_name").value ; 
    var price = document.getElementById("input_price").value ; 
    var star = document.getElementById("input_star").value ; 
    var product = {img ,name , price , star } ; 
    var storeProducts = getStoreProducts(); 
    storeProducts.push(product);
    localStorage.setItem("Products", JSON.stringify(storeProducts));
    loadProductsToHtml(storeProducts);
}

loadProductsToHtml(getStoreProducts());