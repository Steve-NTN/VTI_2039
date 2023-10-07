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


const categoryList = [
    {
      label: "Điện thoại",
      value: "1",
    },
    {
      label: "Tablet",
      value: "2",
    },
    {
      label: "Laptop",
      value: "3",
    },
  ];
  
  const manufacturerList = [
    {
      label: "SAMSUNG",
      value: "1",
    },
    {
      label: "IPHONE",
      value: "2",
    },
    {
      label: "XIAOMI",
      value: "3",
    },
    {
      label: "OPPO",
      value: "4",
    },
  ];

let mode = "create";
let productList = [];

function getProducts(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/v1/products",
        success: function (response) {
            productList = response.content;  
            ListProducts = response.content;
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
            let counter = 1; 
            ListProducts.forEach((x,i) => {
                str += 
                `
                    <tr style="vertical-align: middle; border-bottom: 0.727px solid #dee2e6;">
                        <th scope="row">${x.id}</th>
                        <td>${x.name}</td>
                        <td>${x.price}</td>
                        <td>${x.info}</td>
                        <td>${x.detail}</td>
                        <td>${x.ratingStar}</td>
                        <td><p class="td_img">${x.imageName}</p></td>
                        <td>${x.manufacturerId}</td>
                        <td>${x.categoryId}</td>
                        <td><button type="button" class="btn btn-warning " style="color: white;" onclick="onclick_edit(${i})">Edit</button></td>
                        <td><button type="button" class="btn btn-danger" onclick="onclick_delete(${x.id})">Delete</button></td>
                    </tr>
                `
            });
            $("#table").html(str) ;
        },
        error: function(error){
            console.log(error.statusText);
        },
    });
}


function onclick_save(){
    var name = document.getElementById("input_name").value; 
    var price = document.getElementById("input_price").value;
    var info = document.getElementById("input_info").value; 
    var detail = document.getElementById("input_detail").value; 
    var ratingStar = document.getElementById("input_star").value; 
    var imageName = document.getElementById("input_image").value; 
    var manufacturerId = document.getElementById("input_manufacturer").value; 
    var categoryId = document.getElementById("input_category").value;

    var newProduct = { name , price, info, detail, ratingStar, imageName, manufacturerId, categoryId};
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/v1/products",
        data: JSON.stringify(newProduct),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            getProducts() ; 
            alert("Đã thêm mới thành công!") ; 
        }, 
        error: function(){
            console.log("Error"); 
            alert("Thêm mới thất bại!") ;
        } 
    });
}

    
function onclick_delete(id) {
    $.ajax({
      url: "http://localhost:8080/api/v1/products/" + id ,
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
  
function onclick_edit(id) {
    $("#exampleModal").modal("show");
    const item = productList[id];
    mode = "edit";
    $("#input_id").val(item.id);
    $("#input_name").val(item.name);
    $("#input_price").val(item.price);
    $("#input_info").val(item.info);
    $("#input_detail").val(item.detail);
    $("#input_star").val(item.ratingStar);
    $("#input_image").val(item.imageName);
    $("#input_manufacturer").val(item.manufacturerId);
    $("#input_category").val(item.categoryId);
    console.log(item);
}

function onclick_Update(id){
    var name = document.getElementById("input_name").value; 
    var price = document.getElementById("input_price").value;
    var info = document.getElementById("input_info").value; 
    var detail = document.getElementById("input_detail").value; 
    var ratingStar = document.getElementById("input_star").value; 
    var imageName = document.getElementById("input_image").value; 
    var manufacturerId = document.getElementById("input_manufacturer").value; 
    var categoryId = document.getElementById("input_category").value;

    var newProduct = {name , price, info, detail, ratingStar, imageName, manufacturerId, categoryId};
    $.ajax({
      type: "PUT",
      url: "http://localhost:8080/api/v1/products/" + id,
      data: JSON.stringify(newProduct),
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
          getProducts() ; 
          alert("Sửa thành công!") ; 
      }, 
      error: function(){
          console.log("Error"); 
          alert("Sửa thất bại!") ;
      } 
  });
}
