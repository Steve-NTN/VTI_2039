//  Sử dụng jQuery để tải nội dung từ "home.html" và chèn vào phần tử có class "nav"
$(document).ready(function () {
    $('.navbar').load('../components/menu.html');
    $('.carousel').load('../components/carousel.html');
    $('.Banner').load('../components/banner.html');
    $('.product').load('./product/product.html');
    $('.menubar').load('./admin');
});

