function moveIn(){
    let choice = prompt("Mời bạn chọn:");                        
    switch(choice){
        case "1":
            window.open("https://vtiacademy.edu.vn/");
        break;
        case "2":
            window.open("https://www.w3schools.com/");
            break;
        case "3":
            window.open("https://www.google.com/");
            break;
        case "4":
            window.open("https://dantri.com.vn/");
            break;  // nếu không có break sẽ không dừng lại mà sẽ thực hiện thêm cái tiếp theo
        default:
            alert(" Sai định dạng, Mời bạn nhập lại!!");
    }
}