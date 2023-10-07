$(document).ready(function () {
    $("#header").load("./Header");
});

// var Api_products = "http://localhost:8080/api/v1" ; 

// $.ajax({
//     url: `${Api_products}/products` , 
//     type: "GET" , 
//     dataType: "json",
//     success: function(value){
//         console.log(value);
//         var str = "" ; 
//         var Products = value.content ; 
//         Products.forEach((x , i) => {
//             str += 
//             `
//             <div class="row">
//             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//               <img src="./Header/img/Iphone11.webp" alt="." class="Products-img"/>
//             </div>
//           </div>
          
//           <div class="row">
//             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//               <h3>${x.name}</h3>
//             </div>
//           </div>
         
//           <div class="row">
//             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//               <a>Hãng Sản Xuất:</a>
//             </div>
//           </div>
       
//           <div class="row">
//             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//               <ul class="rating">
//                 <li>
//                   <i class="fa fa-star selected" style="color: orange"></i>
//                 </li>
//                 <li>
//                   <i class="fa fa-star selected" style="color: orange"></i>
//                 </li>
//                 <li>
//                   <i class="fa fa-star"></i>
//                 </li>
//                 <li>
//                   <i class="fa fa-star"></i>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           <div class="row">
//             <div class="col-sm-4 col-md-4 col-lg-4">
//               <a>1.000.000đ</a>
//             </div>
//             <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//               <button type="button" class="btn btn-default" style="border: 0px">
//                 <i class="fa-solid fa-cart-shopping icon_shop" style="color: red; font-size: 25px;"></i>
//               </button>
//             </div>
//           </div>
//             `; 
//         });
//         $("#Product").html(str) ;
//     }
// }); 


