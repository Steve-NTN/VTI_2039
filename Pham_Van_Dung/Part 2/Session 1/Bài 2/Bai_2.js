function Sum (){
    var number1 = document.getElementById("num_1").value  ; 
    var number2 = document.getElementById("num_2").value ; 
    var sum = parseFloat(number1) + parseFloat(number2) ; 

    check(number1,number2,sum) ;  
}   

function check(num_1 , num_2 , result){
    if(isNaN(result) == false){
        document.getElementById("result").value = result ; 
        document.getElementById("log").innerText = "" ; 
    }
    else if (isNaN(num_1) == true && isNaN(num_2) == true){
        document.getElementById("log").innerText = "Vui lòng nhập lại !"; 
        document.getElementById("num_1").value = null; 
        document.getElementById("num_2").value = null ;
        document.getElementById("result").value = null ;  
    }
    else if(isNaN(num_1) == true){
        document.getElementById("num_1").value = null ; 
        document.getElementById("num_2").value = null ; 
        document.getElementById("result").value = null ; 
        document.getElementById("log").innerText = "Vui lòng nhập lại Số 1";
    }
    else {
        document.getElementById("num_1").value = null ; 
        document.getElementById("num_2").value = null ; 
        document.getElementById("result").value = null ; 
        document.getElementById("log").innerText = "Vui lòng nhập lại Số 2";
    }
}