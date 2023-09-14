
$(document).ready(function(){
//Hàm reset các giá trị về ""
    function reset(){
        // $("#Form_Regis").reset();
        $("#Name").value = "";
        $("#Email").value = "";
        $("#Password").value = "";
        $("#ConfirmPass").value = "";
        $("#Birthday").value = "";
    }
//Hàm lấy giá trị từ ô input khi ấn nút đăng ký
    function register(){
        var full_name = $("#Name").val();
        var email = $("#Email").val();
        var pass = $("#Password").val();
        var confirm_pass = $("#ConfirmPass").val();
        var birthday = $("#Birthday").val();

        if(pass !== confirm_pass){
            alert("Mật khẩu không trùng khớp vui lòng nhập lại!!")
        }
       
//Khởi tạo một đối tượng và gán các giá trị vừa lấy được từ ô input vào đối tượng này
        var user = {
            FullName : full_name,
            Email : email,
            Pass : pass,
            ConfirmPass : confirm_pass,
            Birthday : birthday,
        }
        console.log(user);
//Khi ấn nút đăng kí sẽ nhảy đến trang login
        // window.open('Login.html','_self');
//Convert đối tượng user về dạng string
        var json = JSON.stringify(user);
//Gán giá trị vào strorage: (dưới dạng key : value)
        localStorage.setItem('user', json);
        
    }

})
