function myClick(event){
    event.preventDefault();
  var name = $("#name").value;
  var email = $("#email").value;
  var password = $("#pass").value;
  var cfpassword = $("#cfpass").value;
  var birth = $("#birth").value;
  var newAccount = {name, email, password, cfpassword, birth}; 
  
  var account = JSON.parse(localStorage.getItem("accounts") || "[]");

  if (password != cfpassword) {
    alert("Mật khẩu và nhập lại mật khẩu không giống nhau")
  }

  var isExists = false;

  for(i = 0; i < account.length; i++){
    var currentAccount = account[i]
    if(currentAccount.email === email){
        isExists = true;
        break;
    }
  }

  if (isExists) {
    alert("Tài khoản đã được đăng ký");

  }else{
    account.push(newAccount);
    localStorage.setItem("accounts",JSON.stringify(account));
    location.href="../login";
  }
}
