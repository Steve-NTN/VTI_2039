var listStudent;

function handleInput() {

    var numOfStudent = prompt("Mời bạn chọn số lượng học viên cần quản lý: ", 1);
    listStudent = new Array(numOfStudent);
    for (i = 0; i < numOfStudent; i++) {
        alert("Nhập liệu học viên thứ " + (i + 1));
        var idInput = prompt("Nhập vào id học viên: ");
        var nameInput = prompt("Nhập vào tên học viên: ");
        var student = {
            id: idInput,
            name: nameInput,
        };

        listStudent[i] = student;
    }
    console.log("listStudent: ", listStudent);
    alert("Nhập liệu thành công");

    showStudent();
}

function showStudent() {

    document.getElementById("bodyTable_id").innerHTML = "";
    listStudent.forEach((student) => {
        document.getElementById("bodyTable_id").innerHTML += ` 
    <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
     </tr>`;
    });
}
