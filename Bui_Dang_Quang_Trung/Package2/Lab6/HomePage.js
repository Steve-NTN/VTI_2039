//Khai báo hàm:
$( function(){
    loadFunction();
    loadListProduct();
})
//hàm settimeout để giúp cho khi load xong các thành phần khác thì danh sách sp sẽ được load (cài đặt thời gian xuất hiện của nó)
// setTimeout(() => {
//     loadListProduct();
// },200);
//Load các thành phần trang HomePage:
    function loadFunction(){
    header = $("#header");
    banner = $("#banner");
    sale = $("#sale");
    product = $("#product");

    header.load("Menu.html");
    banner.load("Banner.html");
    sale.load("Sale.html");
    product.load("Products.html");
}


//Hàm lấy dữ liệu và generate các sản phẩm:
//response là cái api trả về
function loadListProduct(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/v1/products",
        dataType: "JSON",
        success: function (value) {
            //Dấu hỏi chấm chỗ value là tránh trương hợp value null, lỗi không tìm thấy khi chỉ có dấu chấm, nên có dấu chấm hỏi để tránh bị lỗi
            var products = value?.content || [];  // lấy ra danh sách sản phẩm (do ds sản phẩm là một object nên chấm content để lấy dữ liệu trong content ra), nếu null sẽ gán cho là mảng rỗng
            var productsHtml = ""; // gán bằng chuỗi rỗng
            for(let i = 0 ; i < products?.length; i++ ){
                productsHtml +=`<div class="col-3">
                                    <div class="row">
                                        <div class="col-12">
                                             <img src="${products[i].imageName}" class="img-product">
                                         </div>
                                     </div>
                    
                                     <div class="row">
                                         <div class="col-12">
                                             <p class="name-product">${products[i].name}</p>
                                         </div>
                                     </div>
                                     <div class="row">
                                         <div class="col">
                                             <p class="brand-product">Hãng sản xuất: ${products[i].manufacturerName}</p>
                                         </div>         
                                     </div>
                                     <div class="row">
                                         <div class="col-12">
                                             <ul class="rating">
                                             ${showStarRating(products[i].ratingStar)}
                                             </ul>
                                         </div>  
                                     </div>
                                     <div class="row">
                                         <div class="col-4">
                                             <p class="price-product">${products[i].price}</p>
                                         </div>
                                         <div class="col-6">
                                             <button class="btn btn-default"><i class="fa fa-shopping-cart" style="font-size: 20px; color: red;"></i></button>
                                         </div>
                                     </div>
                                 </div>`
            }
            $("#listproduct").html(productsHtml);
        },
    });
}
//Hàm hiển thị sao đánh giá
function showStarRating(ratingStar) {    //tham số ratingStar đại diện cho số sao đánh giá của sản phẩm
    let starRating = "";
    //Hiển thị đánh giá có sao
    for (let i = 1; i <= ratingStar; i++){
        starRating += ` <li>
        <i class="fa fa-star selected" style="color: orange;"></i>
        </li>`;
    }
    //Hiển thị các Sao không được đánh giá
    for (let i = 1; i <= 5 - ratingStar; i++){
        starRating += `<li>
        <i class="fa fa-star selected"></i>
        </li>`;
    }
    return starRating;
}



