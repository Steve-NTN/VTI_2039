function onLogin(event) {
  event.preventDefault();
  // Thông tin người đăng nhặp
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var loginInfo = { email, password };

  // Danh sách các tài khoản đã đăng ký
  var accounts = JSON.parse(localStorage.getItem("accouts") || "[]");

  // Kiểm tra tài khoản có trong localstorage hay ko
  var isExists = false;
  for (var i = 0; i < accounts.length; i++) {
    var currentaccount = accounts[i];
    if (
      currentaccount.email === email &&
      currentaccount.password === password
    ) {
      isExists = true;
      break;
    }
  }

  if (isExists) {
    localStorage.setItem("isLoggedin", "1");
    window.location.href = "../index.html";
  } else {
    alert("Tài khỏan hoặc mật khẩu bị sai");
  }
}

function onSignup(event) {
  event.preventDefault();
  window.location.href = "../signup";
}
