async function onclick_save(){
    var name = document.getElementById("input_name").value ; 
    var price = document.getElementById("input_price").value ; 
    var info = document.getElementById("input_info").value ; 
    var detail = document.getElementById("input_detail").value ; 
    var star = document.getElementById("input_star").value ; 
    var imagevalue = document.getElementById("input_image").value ; 
    var imageFiles = document.getElementById("input_image").files   ;

    var imageFiles = imageFiles.length > 0 ? imageFiles[0] : null ;
    var image; 
    if(imageFiles){
        image = await toBase64(imageFiles);
    }
    
    var manufacturer = document.getElementById("input_manufacturer").options[document.getElementById("input_manufacturer").selectedIndex].value ;
    var category = document.getElementById("input_category").options[document.getElementById("input_category").selectedIndex].value ; 
    
    var Products = {name , price , info , detail , star, image , manufacturer , category , imagevalue} ; 
    
     var listProducts = localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [] ; 
      
    listProducts.push(Products);
    
    loadToHtml(listProducts) ; 
    localStorage.setItem("Products" , JSON.stringify(listProducts));
}

function loadToHtml( x = []){
    var str = `   
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
    ` ; 
    x.forEach((product , i) => {
        str += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.info}</td>
            <td>${product.detail}</td>
            <td>${product.star}</td>
            <td>${product.imagevalue}</td>
            <td>${product.manufacturer}</td>
            <td>${product.category}</td>
            <td><button type="button" class="btn btn-warning" style="color: white;">Edit</button></td>
            <td><button type="button" class="btn btn-danger" onclick="onclick_delete(${i})">Delete</button></td>
        </tr>
        `
    });
    
    document.getElementById("table").innerHTML = str ; 
}

loadToHtml(localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [] );

function onclick_delete(id){
    var product = localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [] ; 
    product.splice(id , 1); 
    localStorage.setItem("Products" , JSON.stringify(product));
    loadToHtml(product) ;
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});