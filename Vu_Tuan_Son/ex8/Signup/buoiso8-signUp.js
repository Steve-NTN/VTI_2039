var info = {};
var A =[];
const submit= () => {
// get current user
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    info = {
        name: name,
        email: email,
        password:password
    };

// get all accounts
var accounts = JSON.parse(localStorage.getItem("Info")) || [];
// check account exists
let isExists = accounts.filter(account => account?.email === info?.email);
if(isExists.length > 0) {
    alert("Error")
} else {
    accounts.push(info)
    localStorage.setItem('Info',JSON.stringify(accounts));
    alert("Registered successfully")
    location.href = "http://127.0.0.1:5500/Fe%202309/Buoiso8/Login/buoiso8-login.html "
 }
}
