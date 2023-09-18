function onLogin(event) {
    event.preventDefault();
var email = $("#email");
var password = $("#password");
var loginAccount = {email, password};

var account = JSON.parse(localStorage.getItem("accounts") || "[]");

var isExists = false;

for(i = 0; i<account.length; i++){
    var loggedAccount = account[i]

    if(loggedAccount.email === email && 
        loggedAccount.password === password)
    isExists = true;
    break;
}

if(isExists){
    localStorage.setItem("isLoggedin", "1");
    location.href = "../index.html";
}else{
    alert("Tài khoản hoặc mật khẩu không chính xác!");
}

function onSignup(event){
    event.preventDefault();
    location.href = "../signup";
}
}
