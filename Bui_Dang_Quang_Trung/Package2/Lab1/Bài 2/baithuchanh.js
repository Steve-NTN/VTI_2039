function sumInput(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
     if(a =="" || b =="" || a == null || b == null){
        alert("Vui lòng nhập vào hai số");
        return false;
     }else{
        var c = Number(a) + Number(b);
        document.getElementById("sum").value = c;
     }

}