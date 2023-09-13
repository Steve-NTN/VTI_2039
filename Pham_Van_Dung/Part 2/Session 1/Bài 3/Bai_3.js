function link (){
    var choice = prompt('Mời bạn chọn:'); 

    switch(choice){
        case "1": 
          window.open("https://vtiacademy.edu.vn/");
          break;
        case "2":
          window.open("https://www.w3schools.com/"); 
          break; 
        case "3":
          window.open("https://www.google.com/?hl=vi");
          break; 
        case "4":
          window.open("https://diendandoanhnghiep.vn/");
          break;
        default:
          document.getElementById("log").innerText = "Bạn vui lòng nhập lại theo menu !" ; 
    }
}