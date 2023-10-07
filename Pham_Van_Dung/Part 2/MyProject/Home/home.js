$(document).ready(function () {
    $("#home_menu").load("./menu.html");
    $("#home_banner").load("./banner.html");
    getProducts(); 
});

function getProducts(){
    
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/v1/products",
            data: "data",
            contentType: "application/json",
            dataType: "json",
            success: (response) => {
                ListProducts = response.content ; 
                if(ListProducts.length){
                    loadProducts(ListProducts);  
                }
            }, 
            error: (error) => {
    
            }
        });
    
}

function loadProducts(ListProducts) {
    var str =``;
    ListProducts.forEach((x , i) => {
        str += 
        `
        <section class="Product_item col-xs-3 col-sm-3 col-md-3 col-lg-3">
         <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <img src="./img/${x.imageName}" alt="." class="Products-img"/>
                </div>
              </div>
              
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                  <a>${x.price}đ</a>
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



