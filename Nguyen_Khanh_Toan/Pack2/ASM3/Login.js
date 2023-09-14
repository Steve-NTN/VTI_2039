function loginSuccess(event) {
    event.preventDefault()
    var v_Email_Login_id = document.getElementById('email').value
    var v_Password_Login_id = document.getElementById('pwd').value
    var user = JSON.parse(localStorage.getItem('user')) 

    if ((user.Email == v_Email_Login_id) && (user.Password == v_Password_Login_id)) {
        alert('Đăng nhập thành công')
        window.open('Home.html', '_self')
        
    }
    else {
        alert('Kiểm tra lại thông tin!!!')
    }
}


function returnPageRegister() {
    window.open('Register.html', '_self')
}


