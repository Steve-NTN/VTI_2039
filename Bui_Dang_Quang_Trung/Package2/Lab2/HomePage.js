//Khai báo hàm:
$(function(){
    loadFunction();
    loadListProduct();
})
//hàm settimeout để giúp cho khi load xong các thành phần khác thì danh sách sp sẽ đuọc (cài đặt thời gian xuất hiện của nó)
setTimeout(() => {
    loadListProduct();
},300);
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
function loadListProduct(){
   let ListPro = $("#listproduct");
    for(let i = 0 ; i < 4 ; i++ ){
        ListPro.append(`
            <div class="col-3">
                <div class="row">
                    <div class="col-12">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg" alt="Reno6 Z" class="img-product">
                    </div>
                </div>
    
                <div class="row">
                    <div class="col-12">
                        <p class="name-product">Reno6 Z 5G</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="brand-product">Hãng sản xuất: OPPO</p>
                    </div>         
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul class="rating">
                            <li><i class="fa fa-star selected" style="color: orange;"></i></li>
                            <li><i class="fa fa-star selected" style="color: orange;"></i></li>
                            <li><i class="fa fa-star selected" style="color: orange;"></i></li>
                            <li><i class="fa fa-star selected" style="color: orange;"></i></li>
                            <li><i class="fa fa-star selected"></i></li>
                        </ul>
                    </div>  
                </div>
                <div class="row">
                    <div class="col-4">
                        <p class="price-product">9.490.000₫</p>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-default"><i class="fa fa-shopping-cart" style="font-size: 20px; color: red;"></i></button>
                    </div>
                </div>
            </div>
    `);
    }
}
