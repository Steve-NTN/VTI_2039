//Hàm xử lý login và lấy dữ liệu ra, sau đó so sánh dữ liệu nhập vào với dữ liệu được lưu trữ có trùng khớp hay không
function login(){
    //Lấy giá trị từ trường nhập dữ liệu ở ô input
    var lg_email = $("#email").val();
    var lg_pass = $("#password").val();
    //Lấy giá trị được lưu ở strorage và chuyển hóa nó về dạng object
    var user = JSON.parse(localStorage.getItem('user'))  //lấy value thông qua key 

    //Kiểm tra email, pass vừa nhập có trùng khớp với email pass trong kho lưu trữ không?
    if((lg_email == user.Email) && (lg_pass == user.Pass)){
        alert("Bạn đã đăng nhập thành công!")
        welcome.open('Home.html','_self')
    }
    else{
        alert("Thông tin không tồn tại!")
    }
}
//Hàm xử lý nút register trong trang login
function prev_register(){
    window.open('Register.html','_self')
}