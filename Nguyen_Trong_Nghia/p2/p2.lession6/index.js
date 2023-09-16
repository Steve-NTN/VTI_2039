$(document).ready(function () {
  var isLoggedin = localStorage.getItem("isLoggedin") === "1";

  if (isLoggedin) {
    async function load_home() {
      $("#header").load("./header");
      // header.innerHTML = await (await fetch("./header")).text();
      // header.innerHTML = '<object type="text/html" data="./header" ></object>';
      $("#content").load("./products");
    }

    load_home();
  } else {
    window.location.href = "./login";
  }
});
