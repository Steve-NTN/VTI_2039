$(document).ready(function () {
  var isLoggedin = localStorage.getItem("isLoggedin") === "1";

  if (isLoggedin) {
    async function load_home() {
      $("#header").load("./header");
      $("#content").load("./")
    }

    load_home();
  } else {
    window.location.href = "./login";
  }
});