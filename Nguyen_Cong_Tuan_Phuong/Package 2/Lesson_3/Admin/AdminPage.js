$(function () {
  loadComponentAdmin();
});

// Load các thành phần của trang Home Page
function loadComponentAdmin(params) {
  $(".MenuSection").load("./MenuAdmin.html");
  $(".SideBarSection").load("./SideBarAdmin.html");
  //   $(".ProductAdminSection").load("./ContentProductAdmin.html");
}

// Xử lý khi click vào menu Product
function handleShowProduct(params) {
  $(".ProductAdminSection").load("./ContentProductAdmin.html");
}

// Xử lý khi click vào menu Manufacturer
function handleShowManufacturer(params) {
  $(".ProductAdminSection").load("./ContentManufacturerAdmin.html");
}

// Xử lý khi click vào menu Category
function handleShowCategory(params) {
  $(".ProductAdminSection").load("./ContentCategoryAdmin.html");
}

// Xử lý khi click vào menu Account
function handleShowAccount(params) {
  $(".ProductAdminSection").load("./ContentAccountAdmin.html");
}
