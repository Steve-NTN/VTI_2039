function onclickRegister (){
    // lấy data từ ô input . 
    var name = document.getElementById("input-fullName").value ; 
    var email = document.getElementById("input-email").value ; 
    var pass = document.getElementById("input-password").value ; 
    var pass2 = document.getElementById("input-comfirmation").value ; 
    var brithday = document.getElementById("input-date").value ; 
    
    var newPerson = {name , email , pass , brithday} ; 
    
    if( pass !== pass2){
        document.getElementById("log").innerText = "Vui lòng nhập lại !" ;
    }
    else if(pass === pass2 && name && email && pass && pass2 && brithday){
        var Persons = localStorage.getItem("Person") ? JSON.parse(localStorage.getItem("Person")) : [] ; 
    
        // Kiểm tra xem tài khoản đã đăng kí chưa 
        var check = false ; 
        Persons .forEach((person) => { 
            if(person.email === email){
                check = true ; 
            }
        });
        if(check){
            alert("tài khoản đăng kí !");
        }
        else{
            // Lưu thông tin người vừa đki 
            Persons.push(newPerson) ;
            localStorage.setItem("Person" , JSON.stringify(Persons)) ;  
            window.location.href =  "./Login.html";
        } 
    } 
}

function onclickLogin(){
    var email = document.getElementById("email-login").value ; 
    var password = document.getElementById("pass-login").value; 
    var login = {email , password} ; 

    var accounts = JSON.parse(localStorage.getItem("Person") || "[]");
    
    var check = false ; 
    for (var i = 0; i < accounts.length; i++) {
        var currentaccount = accounts[i];
        if (
          currentaccount.email === email &&
          currentaccount.pass === password
        ) {
          check = true;
          break;
        }
      }


    if(check){
        console.log("Oke");
    } else {
        console.log("No");
    }
}