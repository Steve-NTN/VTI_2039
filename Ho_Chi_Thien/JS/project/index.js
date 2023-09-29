// var header = document.getElementById("header");

// async function load_header() {
//   header.innerHTML = await (
//     await fetch("../project/header/header.html")
//   ).text();
// }

// var banner = document.getElementById("banner");
// async function load_banner() {
//   banner.innerHTML = await (
//     await fetch("../project/banner/banner.html")
//   ).text();
// }

// var product = document.getElementById("product");
// async function load_product() {
//   product.innerHTML = await (
//     await fetch("../project/product/product.html")
//   ).text();
// }

// var footer = document.getElementById("footer");
// async function load_footer() {
//   footer.innerHTML = await (
//     await fetch("../project/footer/footer.html")
//   ).text();
// }

// load_header();
// load_banner();
// load_product();
// load_footer();

let homeLoaded = false;

async function load_home() {
  if (!homeLoaded) {
    $("#header").load("../project/header/header.html");
    $("#content").load("../project/banner/banner.html");
    $("#footer").load("../project/footer/footer.html");

    // Đặt biến homeLoaded thành true để đánh dấu rằng hàm đã được gọi.
    homeLoaded = true;
  }
}

// Gọi hàm load_home() chỉ một lần, lần sau sẽ bỏ qua.
load_home();
