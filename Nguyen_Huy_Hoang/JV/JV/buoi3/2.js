$(document).ready(function(){
    var a = $("#logEmail")
    var b = $("#logPass")

    function login(){
        if (a === localStorage.getItem("email") && b === localStorage.getItem("pass")) {
           location.href="http://127.0.0.1:5500/VTI_2039/Nguyen_Huy_Hoang/JV/buoi3/3.html" 
        }
    }
})