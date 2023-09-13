function ListProducts(img , name , producer , star , cost){
    this.img = img ; 
    this.name = name ; 
    this.producer = producer ; 
    this.star = star ; 
    this.cost = cost ; 
  }
  
  var iphone12 = new ListProducts('./img/Iphone11.webp' , 'Iphone 11' , 'Iphone' , '5' , '20.000.000đ');
  var iphone14 = new ListProducts('./img/Iphone14.webp' , 'Iphone 14' , 'Iphone' , '3' , '40.000.000đ');
  var realme10 = new ListProducts('./img/Realme10.webp' , 'Realme 10' , 'Realme' , '4.5' , '5.000.000đ'); 
  var realme10 = new ListProducts('./img/Realme10.webp' , 'Realme 10' , 'Realme' , '4.5' , '5.000.000đ');
  var realmec30s = new ListProducts('./img/Realme-c30s.webp' , 'Realme c30s' , 'Realme' , '4.1' , '1.690.000đ');
  
  var arrayProducts = [
    iphone12 , 
    iphone14 , 
    realme10 , 
    realmec30s
  ]; 
  
  var str = "" ; 
  
  for(let i = 0 ; i < arrayProducts.length ; i++){
    str += `
    <section class="Products-item">
          <img class="Products-img" src="${arrayProducts[i].img}" alt="">
          <h3>${arrayProducts[i].name}</h3>
          <p>Hãng sản xuất: ${arrayProducts[i].producer}</p>
          <p style="color: red;">${arrayProducts[i].cost}</p>
          <a>${arrayProducts[i].star}<i class="bi bi-star-fill"  style="color: yellow;"></i></a>
          <button class="button-add">
          <i class="bi bi-cart-plus-fill basket" style="font-size: 25px; color: red;"></i>
          </button>
      </section>
    `
  }
  
  document.querySelector(".Products").innerHTML = str ; 