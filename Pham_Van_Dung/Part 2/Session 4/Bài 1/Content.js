
function onclick_save(){
    var name = document.getElementById("input_name").value ;
    var price = document.getElementById("input_price").value ; 
    var info = document.getElementById("input_info").value ; 
    var detail = document.getElementById("input_detail").value ; 
    var star = document.getElementById("input_star").value ; 
    var image = document.getElementById("input_image").value ; 
    var manufacturer = document.getElementById("input-manufacturer").value ;
    var category = document.getElementById("input-category").value ; 

    var listProdusts = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [] ;

    listProdusts.push({ 
        fullname: name ,  
        price: price,
        info: info , 
        detail: detail , 
        star: star , 
        image: image  ,
        manufacturer: manufacturer,
        category: category 
     }); 
    
    loadToHtml(listProdusts) ; 
    localStorage.setItem('Products' , JSON.stringify(listProdusts));

}

function loadToHtml (products = []){
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
    
    products.forEach((product , i) =>{
        var id = i;  
        tableContent += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${product.fullname}</td>
            <td>${product.price}</td>
            <td>${product.info}</td>
            <td>${product.detail}</td>
            <td>${product.star}</td>
            <td>${product.image}</td>
            <td>${product.manufacturer}</td>
            <td>${product.category}</td>
            <td><button type="button" class="btn btn-warning" style="color: white;">Edit</button></td>
            <td><button type="button" class="btn btn-danger" onclick="onclick_delete(${id})">Delete</button></td>
        </tr>
        `   
    });
    document.getElementById('table').innerHTML = tableContent ; 
}

loadToHtml(localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [] );

function onclick_delete(id){
   var product =  localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [] ; 
   product.splice(id , 1);
   localStorage.setItem('Products' , JSON.stringify(product)); 
   loadToHtml(product) ;  
}
