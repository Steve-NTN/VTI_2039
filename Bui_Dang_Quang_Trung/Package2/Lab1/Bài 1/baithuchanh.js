function myFunction (){
    let yourname =  prompt ("Bạn hãy nhập vào tên:");
    let yourage = prompt ("Bạn hãy nhập vào tuổi:" , 30);
    let yourgender = prompt ("Giới tính của bạn là:" , "nam");
    let youraddress = prompt ("Địa chỉ của bạn là:" , "Hà Nội");
    let yourclass = prompt("Lớp học của bạn là:", "FR 2309")
    if(yourname == "" || yourname == null){
        alert("Vui lòng điền tên của bạn!!!")
    }else{
        document.getElementById("name").innerHTML = "Tên của bạn là: " +"<B>" +yourname +"</B>";
        document.getElementById("age").innerHTML = "Tuổi của bạn là: "+yourage;
        document.getElementById("gender").innerHTML = "Giới tính của bạn là: "+yourgender;
        document.getElementById("address").innerHTML = "Địa chỉ của bạn là: "+youraddress;
        document.getElementById("class").innerHTML = "Lớp học của bạn là: "+yourclass;
    }

}