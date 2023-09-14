var info = {};
var A =[];
const login= () => {
// get current user
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    info = {
        email: email,
        password:password
    };

// get all accounts
var accounts = JSON.parse(localStorage.getItem("Info")) || [];
// check account exists
let isAccount = accounts.filter(account => account?.email === info?.email);
if(isAccount.length > 0) {
    accounts.push(info)
    localStorage.setItem('Info',JSON.stringify(accounts));
    location.href = 'https://www.mancity.com/'
} else {
    alert("Error")
}
}