// Reset Form Register
function resetForm() {
    clearInput('Full_Name_ID');
    clearInput('Email_ID');
    clearInput('Password_ID');
    clearInput('Re_Password_ID');
    clearInput('Birthday_ID');
}

function clearInput(elementId) {
    document.getElementById(elementId).value = '';
}

function createNewUser() {
    var fullName = getInputValue('Full_Name_ID');
    var email = getInputValue('Email_ID');
    var password = getInputValue('Password_ID');
    var rePassword = getInputValue('Re_Password_ID');
    var birthday = getInputValue('Birthday_ID');

    if (password !== rePassword) {
        alert("Mật khẩu không trùng khớp");
    }

    var user = {
        Full_Name: fullName,
        Email: email,
        Password: password,
        Birthday: birthday
    };

    window.open('Login.html', '_self');

    var json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

function getInputValue(elementId) {
    return document.getElementById(elementId).value;
}

function loginSuccess() {
    var emailLogin = getInputValue('Email_Login_id');
    var passwordLogin = getInputValue('Password_Login_id');
    var storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.Email === emailLogin && storedUser.Password === passwordLogin) {
        alert('Đăng nhập thành công');
        window.open('Home.html', '_self');
    } else {
        alert('Kiểm tra lại thông tin!!!');
    }
}

function returnPageRegister() {
    window.open('Register_System.html', '_self');
}
