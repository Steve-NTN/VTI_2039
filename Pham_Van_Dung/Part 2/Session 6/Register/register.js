console.log("Hoai Anh");


function onclickRegister(){
    var name = document.getElementById("input-name").value ; 
    var email = document.getElementById("input-email").value ; 
    var pass = document.getElementById("input-pass").value; 
    var pass2 = document.getElementById("input-pass2").value; 
    var brithday = document.getElementById("input-date").value ; 
    console.log(name);
    person = {name , email , pass , brithday}; 
    var listPerson = localStorage.getItem("Person") ? JSON.parse(localStorage.getItem("Person")) : [] ; 
    if(pass === pass2 && name && pass && email && brithday && pass2){
        listPerson.push(person) ; 
        localStorage.setItem("Person" , JSON.stringify(listPerson));
        window.location.href = "../Login";
    }
    else if (pass !== pass2){
        document.getElementById("log").innerText = "Vui lòng nhập lại pass !";
    }
}