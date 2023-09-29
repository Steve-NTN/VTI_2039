$(document).ready(function () {
  var isLoggedin = localStorage.getItem("isLoggedin") === "1";

  if (isLoggedin) {
    async function load_home() {
      // var header = document.getElementById("header")
      // header.innerHTML = await (await fetch("./header")).text();

      // var script = document.createElement("script");
      // script.innerHTML = await (await fetch("./header/header.js")).text();
      // document.body.appendChild(script);

      // header.innerHTML = '<object type="text/html" data="./header" ></object>';

      $("#header").load("./header/index.html");
      // $("#content").load("./products");
    }

    load_home();
  } else {
    window.location.href = "./login";
  }
});
