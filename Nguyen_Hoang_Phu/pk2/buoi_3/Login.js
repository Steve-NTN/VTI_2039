let btnLogin = document.getElementById("btnLogin")
let tenDangNhap = document.getElementById("exampleInputEmail1")
let matKhau = document.getElementById("exampleInputPassword1")

function denTrangChu() {
    let thongTinDangNhapJSON = localStorage.getItem("thongTinDangNhap")
    let thongTinDangNhap = JSON.parse(thongTinDangNhapJSON)
    // kiem tra du lieu nhap vao trung khop voi du lieu trong localStorage
    if (
        tenDangNhap.value === thongTinDangNhap.tenDangNhapDuocLuu &&
        matKhau.value === thongTinDangNhap.matKhauDuocLuu
    ) {
        window.location.href = "./Home.Html"
    } else {
        alert("Tai khoan hoac mat khau khong chinh xac")
    }
};

btnLogin.addEventListener("click", denTrangChu)