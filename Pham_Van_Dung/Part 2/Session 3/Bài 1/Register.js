
function onclickRegister() {
    var name = document.getElementById("input-fullName").value;
    var email = document.getElementById("input-email").value;
    var pass = document.getElementById("input-password").value; 
    var pass2 = document.getElementById("input-comfirmation").value;
    var birthday = document.getElementById("input-date").value;
    if(pass !== pass2){
        document.getElementById("input-fullName").value = null ;
        document.getElementById("input-email").value = null ; 
        document.getElementById("input-password").value = null ; 
        document.getElementById("input-comfirmation").value = null ; 
        document.getElementById("input-date").value = null ;
        document.getElementById("log").innerText = "Nhập lại đi brother!";
    }
    else if(pass === pass2){
        document.getElementById("log").innerText = "";
        var user = {
        Name: name  , 
        Email: email , 
        Pass: pass , 
        Birthday: birthday   
        }

        localStorage.setItem('person' , JSON.stringify(user));
        window.open("http://127.0.0.1:5500/B%C3%A0i_1/Login.html")
        console.log(user);
    }
}

function onclickLogin(){
    var login_email = document.getElementById("email-login").value ; 
    var login_pass = document.getElementById("pass-login").value; 
    var person = JSON.parse(localStorage.getItem('person'));
    
    if((person.Email === login_email) && (person.Pass === login_pass)){
        console.log(person);
        window.open("http://127.0.0.1:5500/VTI_2039/Pham_Van_Dung/Part%202/Session%202/B%C3%A0i%202/Admin.html"); 
    }
}


// function onclickRegister(){
//     // window.open("http://127.0.0.1:5500/B%C3%A0i_1/Register.html")
// }

function onclickReset(){
    document.getElementById("input-fullName").value = null ;
    document.getElementById("input-email").value = null ; 
    document.getElementById("input-password").value = null ; 
    document.getElementById("input-comfirmation").value = null ; 
    document.getElementById("input-date").value = null ;
}