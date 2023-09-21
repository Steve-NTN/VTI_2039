//     function foo(event) {
//     event.preventDefault()
    
//     var   name = $("#name").value;
//     var   email = $("#email").value;
//     var   pass = $("#pass").value;
//     var   cpass = $("#cfpass").value;
//     var   birth = $("#birth").value;
//     var newCustomer = {name, email, pass, cpass, birth};
    
    
//     var customers = JSON.parse(localStorage.getItem("customers") || "[]");

//     var isExist = false;
//     for (var i = 0; i<customers.length; i++){
//     var currentCustomer = customers[i];
    
//     if(currentCustomer.email === email)
//         isExist=true;
//     break;

//     if(isExist) {
//         alert("Tài khỏan dã được đăng ký")
//       } else {
          
//         customers.push(newCustomer);
//         localStorage.setItem("customers",JSON.stringify(customers))
//         window.location.href = window.location.replace=("1.html", "2.html")}
//     }
// }

function myclick(event) {
    event.preventDefault()
    // Lấy thông tin người vừa đăng ký
    var   name = $("#name").value;
    var   email = $("#email").value;
    var   pass = $("#pass").value;
    var   cpass = $("#cfpass").value;
    var   birth = $("#birth").value;
    var newAccout = {name, email, pass, cpass, birth};

    // Lấy danh sách toàn bộ tài khoản đã được đăng ký
    var accounts = JSON.parse(localStorage.getItem("accouts") || "[]");

    // Kiểm tra tài khoản có trong localstorage hay ko
    var isExists= false;
    for(var i =0; i< accounts.length; i++) {
      var currentaccount = accounts[i];
      if(currentaccount.email === email) {
        isExists = true;
        break;
      }
    }
    
    if(isExists) {
      alert("Tài khỏan dã được đăng ký")
    } else {
      // Thêm + lưu thông tin người được đăng ký vào trong localstorage 
      accounts.push(newAccout);
      localStorage.setItem("accouts", JSON.stringify(accounts))
      window.location.href = "./login.html"
    }
  }
        
          
