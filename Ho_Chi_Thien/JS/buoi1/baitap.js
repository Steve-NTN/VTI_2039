// let yourname = prompt("Hay nhap vao ten", "");
// let old = prompt("Hay nhap vao tuoi", "");
// let gt = prompt("Hay nhap vao gioi tinh", "");
// let addr = prompt("Hay nhap vao dia chi", "");
// let clas = prompt("Hay nhap vao lop", "");



const nameP = document.getElementById("demo1")

const para1 = document.createElement("span")
para1.innerText =  "Ten cua ban la: ";
const para2 = document.createElement("span")
para2.style.fontWeight = "bold"
para2.style.fontSize = "20px"
para2.innerText = yourname;

const paragraph = document.createElement("p");
paragraph.appendChild(para1);
paragraph.appendChild(para2);

nameP.appendChild(paragraph);

document.getElementById("demo2").innerText = "tuoi cua ban la:" + old;
document.getElementById("demo3").innerHTML = "Gioi tinh cua ban la:" + gt;
document.getElementById("demo4").innerHTML = "Dia chi cua ban la:" + addr;
document.getElementById("demo5").innerHTML = "Lop cua ban la:" + clas;

// bai2


function tong2so() {
    let tong =  Number(document.getElementById("so1").value) + Number(document.getElementById("so2").value)
    document.getElementById("kq").innerHTML = tong
  }



//bai3

function web(){
    let index = prompt("Moi ban chon", "");
    switch(index) {
        case "1":
            window.location.href = "https://vtiacademy.edu.vn/";
          break;
        case "2":
            window.location.href = "https://www.w3schools.com/";
          
          break;
        case "3":
            window.location.href = "https://www.google.com/";
          break;
        case "4":
            window.location.href = "https://dantri.com.vn/";
            break;
        default:
          text = "Nhap loi";
      }
}

//bai4

