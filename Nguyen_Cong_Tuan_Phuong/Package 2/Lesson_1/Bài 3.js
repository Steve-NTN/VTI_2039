function handleRedirect() {
    var choice = prompt("Mời bạn chọn: ", 1);


    switch (choice) {
        case "1":
            window.open("https://vtiacademy.edu.vn/");
            break;
        case "2":
            window.open("https://www.w3schools.com/");
            break;
        case "3":
            window.open("http://google.com/");
            break;
        case "4":
            window.open("https://dantri.com.vn/");
            break;
        default:
            window.open("https://vtiacademy.edu.vn/");
    }
}
