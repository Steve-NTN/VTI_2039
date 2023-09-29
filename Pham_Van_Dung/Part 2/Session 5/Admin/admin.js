

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
    
    var listProducts = getLocalStorage () 
      
    listProducts.push(Products);+
    
    loadToHtml(listProducts) ; 
    localStorage.setItem("Products" , JSON.stringify(listProducts));
}

function getLocalStorage (){
    return localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [] ; 
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
            <td><p class="td_img">${product.imagevalue}</p></td>
            <td>${product.manufacturer}</td>
            <td>${product.category}</td>
            <td><button type="button" class="btn btn-warning " style="color: white;" onclick="onclick_edit(${i})">Edit</button></td>
            <td><button type="button" class="btn btn-danger" onclick="onclick_delete(${i})">Delete</button></td>
        </tr>
        `
    });
    document.getElementById("table").innerHTML = str ; 
}

function onclick_edit(id){      
    $("#exampleModal").modal("show"); 
    var person = getLocalStorage (); 
    
    var slectedProduct = person.find((p, idx) => {
        return idx === id
    })
   
    document.getElementById("input_name").value = slectedProduct.name ; 
    document.getElementById("input_price").value = slectedProduct.price ; 
    document.getElementById("input_info").value = slectedProduct.info ; 
    document.getElementById("input_detail").value = slectedProduct.detail ;
    document.getElementById("input_star").value = slectedProduct.star ; 
    document.getElementById("index").value = id ; 
    document.getElementById("input_manufacturer").value = slectedProduct.manufacturer; 
    document.getElementById("input_category").value = slectedProduct.category ;
    document.getElementById("save").style.display = "none" ;
    document.getElementById("update").style.display = "inline-block";
}

async function onclick_Update(){
    var listProducts = getLocalStorage() ; 
    var i = document.getElementById("index").value ; 
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
    
    listProducts[i] = {name , price , info , detail , star, image , manufacturer , category , imagevalue} ; 
    localStorage.setItem("Products" , JSON.stringify(listProducts));
    loadToHtml(listProducts) ; 
    resetInput() ;
}

function addNew (){
    resetInput() ; 
    document.getElementById("save").style.display = "inline-block" ;
    document.getElementById("update").style.display = "none";
}

function resetInput(){
    document.getElementById("input_name").value = "" , 
    document.getElementById("input_price").value = "" , 
    document.getElementById("input_info").value = "" , 
    document.getElementById("input_detail").value = "" , 
    document.getElementById("input_star").value = "" , 
    document.getElementById("input_image").value = "" ,
    document.getElementById("input_manufacturer").value = "Manufacturer" , 
    document.getElementById("input_category").value = "Category" 
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