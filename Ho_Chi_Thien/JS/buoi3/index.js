//bai1 --- form dang ky luu vao localstogare
$(document).ready(function () {
  const dataLS = [];

  $(".register").click(function (event) {
    event.preventDefault();

    const fullName = $("#fullname").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirm_password").val();
    const birthday = $("#birthday").val();

    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    const DataInfor = {
      fullName,
      email,
      password,
      birthday,
    };

    dataLS.push(DataInfor);

    localStorage.setItem("registrationData", JSON.stringify(dataLS));

    alert("Đăng ký thành công! Dữ liệu đã được lưu.");

    $("#registrationForm")[0].reset();
  });
});
