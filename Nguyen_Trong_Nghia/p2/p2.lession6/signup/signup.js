function onSignup(event) {
  event.preventDefault();

  // Thông tin người đăng nhặp
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var gender = document.getElementById("gender").value;
  var password = document.getElementById("password").value;
  var newAccout = { email, password, name, gender };

  // Lấy danh sách toàn bộ tài khoản đã được đăng ký
  var accounts = JSON.parse(localStorage.getItem("accouts") || "[]");

  // Kiểm tra tài khoản có trong localstorage hay ko
  var isExists = false;
  for (var i = 0; i < accounts.length; i++) {
    var currentaccount = accounts[i];
    if (currentaccount.email === email) {
      isExists = true;
      break;
    }
  }

  if (isExists) {
    alert("Tài khỏan dã được đăng ký");
  } else {
    // Thêm + lưu thông tin người được đăng ký vào trong localstorage
    accounts.push(newAccout);
    localStorage.setItem("accouts", JSON.stringify(accounts));
    window.location.href = "../login";
  }
}
