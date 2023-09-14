let btnRegister = document.getElementById("btnRegister")
let btnGoLogin = document.getElementById("btnGoLogin")
let username = document.getElementById("exampleInputEmail1")
let password = document.getElementById("exampleInputPassword1")

function luuTenDangNhap() {
    let thongTinDangNhap = {
        tenDangNhapDuocLuu: username.value,
        matKhauDuocLuu: password.value,
    }
    localStorage.setItem("thongTinDangNhap", JSON.stringify(thongTinDangNhap))
}

function denTrangLogin() {
    window.location.href = "./Login.html"
}

btnRegister.addEventListener("click", luuTenDangNhap)
btnGoLogin.addEventListener("click", denTrangLogin)