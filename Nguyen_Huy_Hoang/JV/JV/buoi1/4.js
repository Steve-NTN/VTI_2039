var a = prompt("Mời bạn chọn số lượng học viên cần quản lý:").value;
window.alert("Nhập liệu học viên thứ 1")
var nos = parseInt(prompt("Mời bạn chọn số lượng học viên cần quản lý:"));
var name = "Nguyen Van A";

for (var i = 1; i <= nos; i++) {
    table.innerHTML += `<tr><td>${i}</td><td>${name + i }</td></tr>`;
    
}