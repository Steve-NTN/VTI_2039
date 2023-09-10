var listStudent; 

function link() {
    var n = prompt("Mời bạn nhập số lượng sinh viên cần quản lý: "); 
    
    listStudent = new Array(n); 

    for(i = 0 ; i < n ; i++){
        alert('Nhập học viên thứ ' + (i + 1)); 
        var idInput = prompt("Nhập id học viên: ");
        var nameInput = prompt("Nhập vào tên học viên: "); 
        var student = {
            id: idInput , 
            name: nameInput ,
        }; 

        listStudent[i] = student ; 
    }
    console.log("listStudent: " , listStudent) ; 
    alert("Nhập liệu thành công"); 

    showStudent(); 
}

function showStudent(){
    document.getElementById("head_id").innerHTML = `
    <tr>
        <th>Id</th>
        <th>Name</th>
    <tr>
    `; 
    listStudent.forEach((student) => {
        document.getElementById("body_id").innerHTML += 
        `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
        </tr>
        `;
    });
}
