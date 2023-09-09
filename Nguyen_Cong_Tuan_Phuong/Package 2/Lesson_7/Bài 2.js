function Sum2numbers() {
    var num1 = document.getElementById("num1_id").value;
    var num2 = document.getElementById("num2_id").value;


    var sum = Number(num1) + Number(num2);


    console.log("Sum: " + sum);
    document.getElementById("sum_id").value = sum;
}