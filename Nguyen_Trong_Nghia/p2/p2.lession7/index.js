$(document).ready(function () {
  $("#addproduct_btn").click(function () {
    $.ajax({
      url: "http://localhost:8080/api/v1/products",
      method: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({
        name: "Test",
        price: "8.490.000₫ NEW",
        info: "Thiết kế mạnh mẽ, lịch lãm NEW",
        detail: "detail Reno7 NEW",
        ratingStar: "4",
        imageName: "Reno7_NEW.jpg",
        manufacturerId: "4",
        categoryId: "1",
      }),
      success: function () {
        getProducts();
      },
    });
  });

  function getProducts() {
    $.ajax({
      url: "http://localhost:8080/api/v1/products",
      success: function (value) {
        var products = value?.content || [];

        var productsHtml = "";
        for (var i = 0; i < products?.length; i++) {
          productsHtml += `Product: ${products[i].name} <br/>`;
        }

        $("#content").html(productsHtml);
      },
    });
  }

  getProducts();
});
