//  Sử dụng jQuery để tải nội dung từ "home.html" và chèn vào phần tử có class "nav"
$(document).ready(function () {
    $('.navbar').load('../components/menu.html');
});

