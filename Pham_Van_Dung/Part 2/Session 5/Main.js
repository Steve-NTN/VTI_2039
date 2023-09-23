$(document).ready(function () {
    var loggedIn = localStorage.getItem("loggedIn") === "1" ; 
    if(loggedIn){
        $("#header").load("./Header");
    }
    else{
        window.location.href = "./Login" ;
    }
});

