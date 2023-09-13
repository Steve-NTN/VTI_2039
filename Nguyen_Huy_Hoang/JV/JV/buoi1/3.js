function myFunction(){
    var choice = prompt("Mời ban chọn:")
    var vti = "https://vtiacademy.edu.vn/"
    var w3s = "https://www.w3schools.com/"
    var gg = "https://www.google.com.vn/"
    var dt = "https://dantri.com.vn"

        switch (choice) {
            case "1":
                location.href = vti
                break;
            case "2":
                location.href = w3s
                break;
            case "3":
                location.href = gg
                break;
            case "4":
                location.href = dt
                break;
            default:
                alert("Không tồn tại trang web!")
        }
}