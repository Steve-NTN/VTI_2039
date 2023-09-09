 let sl = prompt("Hay nhap vao so luong hoc vien", "");

 function nhap(){
    let s = []
    for (let index = 0; index < sl; index++) {
         s[index] = prompt(`Nhap thong tin hoc vien thu ${index+1}`); 
         let tbody = document.getElementById("table-body") 
         let tr = document.createElement("tr")
         let td1 = document.createElement("td")
            td1.innerHTML = index+1
         let td2 = document.createElement("td")
            td2.innerHTML = s[index]
         tr.appendChild(td1)
         tr.appendChild(td2)
         tbody.append(tr)
    }
 }
