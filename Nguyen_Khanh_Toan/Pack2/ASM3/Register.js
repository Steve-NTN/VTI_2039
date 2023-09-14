function resetForm() {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('pwd').value = ''
    document.getElementById('repwd').value = ''
    document.getElementById('birthday').value = ''
}


function register() {
    var v_Full_Name = document.getElementById('name').value
    var v_Email = document.getElementById('email').value
    var v_Password = document.getElementById('pwd').value
    var v_Re_Password = document.getElementById('repwd').value
    var v_Birthday = document.getElementById('birthday').value


    if (v_Password != v_Re_Password) {
        alert("Mat khau khong trung khop")
    }


    var user = {
        Full_Name: v_Full_Name,
        Email: v_Email,
        Password: v_Password,
        Birthday: v_Birthday,
    }


    window.open('Login.html', '_self')


    var json = JSON.stringify(user)  
    localStorage.setItem('user', json)


}
