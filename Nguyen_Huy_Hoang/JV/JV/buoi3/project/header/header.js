function onClickLogin() {
    console.log("login");
  }
  
  function onClickSignup() {
    location.href="../signup";
  }
  
  function onClickAdmin() {
    $("#content").load("./admin");
  }