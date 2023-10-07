var Api_products = "http://localhost:8080/api/v1" ; 

$.ajax({
    url: `${Api_products}/products` , 
    type: "GET" , 
   
    success: function(value){
        console.log(value);
        var str = "" ; 
        var Products = value.content ; 
        Products.forEach((x , i) => {
            str += 
            `
            <section class="Product_item">
            <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <img src="./Header/img/Iphone11.webp" alt="." class="Products-img"/>
            </div>
          </div>
          
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 Product_name">
              <h3>${x.name}</h3>
            </div>
          </div>
         
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a>Hãng Sản Xuất: ${x.manufacturerName}</a>
            </div>
          </div>
       
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ul class="rating">
                ${starShow(x.ratingStar)}
              </ul>
            </div>
          </div>
          
          <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-4">
              <a>${x.price}</a>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <button type="button" class="btn btn-default" style="border: 0px">
                <i class="fa-solid fa-cart-shopping icon_shop" style="color: red; font-size: 25px;"></i>
              </button>
            </div>
          </div>
          </section>
            `; 
        });
        $("#Product").html(str) ;
    }
}); 

function starShow (star){
    var str = "" ; 
    for( var i = 0 ; i < star ; i++){
        str += 
        `
            <li>
                <i class="fa fa-star selected" style="color: orange"></i>
            </li>
        `
    }
    for(var i = 0 ; i < 5 - star ; i++){
        str += 
        `
            <li>
                <i class="fa fa-star"></i>
            </li>
        `
    }
    return str ; 
}
























































































// function getStoreProducts() {
//     return JSON.parse(localStorage.getItem("Products") || "[]");
//   }

// function loadProductsToHtml(listProducts){ 
//     var str = "" ; 
//     listProducts.forEach((product , i) => {
//         str += 
//         `
//             <section class="Products-item">
//                 <img class="Products-img" src="${product.image}" alt="">
//                 <h4>${product.name}</h4>
//                 <p>Hãng sản xuất: ${product.manufacturer}</p>
//                 <p style="color: red;">${product.price}đ</p>
//                 <a>${product.star}<i class="bi bi-star-fill"  style="color: yellow;"></i></a>
//                 <button class="button-add">
//                     <i class="bi bi-cart-plus-fill basket" style="font-size: 25px; color: red;"></i>
//                 </button>
//             </section>
//         `;
//     });
//     document.getElementById("Product").innerHTML = str ; 
// } 

// loadProductsToHtml(getStoreProducts());
