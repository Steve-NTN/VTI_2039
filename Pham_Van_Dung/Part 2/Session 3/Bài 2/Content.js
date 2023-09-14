
function onclick_save(){
    var name = document.getElementById("input_name").value ;
    var price = document.getElementById("input_price").value ; 
    var info = document.getElementById("input_info").value ; 
    var detail = document.getElementById("input_detail").value ; 
    var star = document.getElementById("input_star").value ; 

    var listProdusts = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [] ;

    console.log(listProdusts.length);
    listProdusts.push({ 
        fullname: name ,  
        price: price,
        info: info , 
        detail: detail , 
        star: star  
    }); 
    
    localStorage.setItem('Products' , JSON.stringify(listProdusts));

    var tableContent = 
    `
        <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Into</th>
            <th scope="col">Detail</th>
            <th scope="col">Star</th>
            <th scope="col">Image</th>
            <th scope="col">NSX</th>
            <th scope="col">Category</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
    `

    listProdusts.forEach((product , i) =>{
        i++; 
        tableContent += `
        <tr>
            <th scope="row">${i}</th>
            <td>${product.fullname}</td>
            <td>${product.price}</td>
            <td>${product.info}</td>
            <td>${product.detail}</td>
            <td>${product.star}</td>
            <td>image1.jpg</td>
            <td>SamSung</td>
            <td>Điện Thoại</td>
            <td><button type="button" class="btn btn-warning" style="color: white;">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        `   
    });
    console.log(listProdusts.length);
    document.getElementById('table').innerHTML = tableContent ; 
}