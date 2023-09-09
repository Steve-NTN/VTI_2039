function redirect() {
    var btn = prompt("Điền từ 1 - 4 để đến web")
    var vti = "https://vtiacademy.edu.vn/"
    var w3school = "https://www.w3schools.com/"
    var google = "https://www.google.com/"
    var dantri = "https://dantri.com.vn/"

    switch (btn) {
        case "1":
            location.href = vti
            break;
        case "2":
            location.href = w3school
            break;
        case "3":
            location.href = google
            break;
        case "4":
            location.href = dantri
            break;
        default:
            alert("Không tồn tại điểm đến bấm lại Choice") = btn
    }
}