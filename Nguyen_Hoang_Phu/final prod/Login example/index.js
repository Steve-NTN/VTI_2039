$(document).ready(function () {

})

function submitInfo(params) {
    const userName = document.getElementById('exampleInputEmail1').value
    const passWord = document.getElementById('exampleInputPassword1').value

    const userInfo = {
        userName: userName,
        passWord: passWord,
    }

    $.ajax({
        url: "https://65119d7b829fa0248e407907.mockapi.io/userInfo",
        type: "POST",
        data: userInfo,
        success() {
            alert("Thanh cong")
        },
        error(error) {
            alert(error.statusText)
        }
    })
}