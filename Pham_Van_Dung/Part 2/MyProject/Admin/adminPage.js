$(document).ready(function () {
  $("#menu_admin").load("./menu.html");
  $("#category").load("./category.html");
  $("#manufactures").load("./manufacturers.html");
  $("#categorys").load("./categorys.html");
  $("#search").load("./search.html");
  $("#content").load("./content.html");
});

function handleShowManufacturer() {
  $("#content").load("menufacturer_admin.html");
}

function handleShowCategory() {
  $("#content").load("category_admin.html");
}

function handleShowProduct() {
  $("#content").load("product_admin.html");
  getProducts();
}


let id = null;
let productList = [];

function getProducts() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/v1/products",
    success: function (response) {
      loadProducts(response.content);
    },
    error: function (error) {
      console.log(error.statusText);
    },
  });
}

function loadProducts(ListProducts) {
  var str =
    `
      <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Info</th>
          <th scope="col">Detail</th>
          <th scope="col">Star</th>
          <th scope="col">Image</th>
          <th scope="col">NSX</th>
          <th scope="col">Category</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
      </tr>
  `;
  ListProducts.forEach((x, i) => {
    str +=
      `
          <tr style="vertical-align: middle; border-bottom: 0.727px solid #dee2e6;">
              <th scope="row">${i + 1}</th>
              <td>${x.name}</td>
              <td>${x.price}</td>
              <td>${x.info}</td>
              <td>${x.detail}</td>
              <td>${x.ratingStar}</td>
              <td><p class="td_img">${x.imageName}</p></td>
              <td>${x.manufacturerName}</td>
              <td>${x.categoryName}</td>
              <td><button type="button" class="btn btn-warning  style="color: white;" onclick='onclick_edit(${JSON.stringify(x)})'>Edit</button></td>
              <td><button type="button" class="btn btn-danger" onclick="onclick_delete(${x.id})">Delete</button></td>
          </tr>
      `
  });
  $("#table").html(str);
}

function getImageName(pathImage) {
  // Chuyển đường dẫn thành mảng các phần tử
  var itemArray = pathImage.split("\\");
  // Lấy phần tử cuối cùng
  var imageName = itemArray[itemArray.length - 1];
  return imageName;
}


function onclick_save() {
  var name = document.getElementById("input_name").value;
  var price = document.getElementById("input_price").value;
  var info = document.getElementById("input_info").value;
  var detail = document.getElementById("input_detail").value;
  var ratingStar = document.getElementById("input_star").value;
  var imageName = getImageName(document.getElementById("input_image").value) ;
  var manufacturerId = document.getElementById("input_manufacturer").value;
  var categoryId = document.getElementById("input_category").value;

  var newProduct = { name, price, info, detail, ratingStar, imageName, manufacturerId, categoryId };
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/api/v1/products",
    data: JSON.stringify(newProduct),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      getProducts();
      alert("Đã thêm mới thành công!");
    },
    error: function () {
      console.log("Error");
      alert("Thêm mới thất bại!");
    }
  });
}

function onclick_delete(id) {
  $.ajax({
    url: "http://localhost:8080/api/v1/products/" + id,
    type: "DELETE",
    success: (response) => {
      alert("Delete thanh cong");
      getProducts();
    },
    error: (error) => {
      console.log("error::", id);
    },
  });
}

function onclick_addNew() {
  id = null;
  resetInput() ; 
  document.getElementById("save").style.display = "inline-block" ;
  document.getElementById("update").style.display = "none";
  console.log(id);
}

function onclick_edit(item) {
  $("#exampleModal").modal("show");
  console.log(item);
  document.getElementById("save").style.display = "none";
  document.getElementById("update").style.display = "inline-block";
  $("#input_name").val(item.name);
  $("#input_price").val(item.price);
  $("#input_info").val(item.info);
  $("#input_detail").val(item.detail);
  $("#input_star").val(item.ratingStar);
  //$("#input_image").val(item.imageName);
  $("#input_manufacturer").val(item.manufacturerId);
  $("#input_category").val(item.categoryId);
  id = item.id;
  console.log(id);
}

function onclick_Update() {
  var name = document.getElementById("input_name").value;
  var price = document.getElementById("input_price").value;
  var info = document.getElementById("input_info").value;
  var detail = document.getElementById("input_detail").value;
  var ratingStar = document.getElementById("input_star").value;
  var imageName = getImageName(document.getElementById("input_image").value);
  var manufacturerId = document.getElementById("input_manufacturer").value;
  var categoryId = document.getElementById("input_category").value;
  var newProduct = { name, price, info, detail, ratingStar, imageName, manufacturerId, categoryId };

  if (id) {
    $.ajax({
      type: "PUT",
      url: "http://localhost:8080/api/v1/products/" + id,
      data: JSON.stringify(newProduct),
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        getProducts();
        alert("Sửa thành công!");
      },
      error: function () {
        console.log("Error");
        alert("Sửa thất bại!");
      }
    });
  }
}

function resetInput(){
  document.getElementById("input_name").value = "" , 
  document.getElementById("input_price").value = "" , 
  document.getElementById("input_info").value = "" , 
  document.getElementById("input_detail").value = "" , 
  document.getElementById("input_star").value = "" , 
  document.getElementById("input_image").value = "" ,
  document.getElementById("input_manufacturer").value = "" , 
  document.getElementById("input_category").value = "" 
}