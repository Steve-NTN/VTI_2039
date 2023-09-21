

function onclickLogin (){
    var email = document.getElementById("input-email").value ; 
    var pass = document.getElementById("input-password").value ; 
    
    var listPerson = localStorage.getItem("Person") ? JSON.parse(localStorage.getItem("Person")) : [] ; 
    var check = false ;

    listPerson.forEach((person , i) => {
        if(person.email === email && person.pass === pass ){
            check = true ; 
        }
    });

    if(check){
        console.log('oke');
        window.location.href = "../Main.html";
    }else {
        alert("Tài khoản mật khẩu đã sai!");
    }
}



function onclickRegister(){
    window.location.href = "../Register" ; 
}