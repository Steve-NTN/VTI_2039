function add() {
    var numb1, numb2, total;
    numb1 = parseFloat(document.getElementById("so_1").value)
    numb2 = parseFloat(document.getElementById("so_2").value)
    total = numb1 + numb2
    document.getElementById("tong").value = total
}