// let row = document.querySelector(".row");

// for (let index = 0; index < 3; index++) {
//   let col3 = document.createElement("div");
//   //addclass col3

// }
// Chọn phần tử ".row" một lần duy nhất ngoài vòng lặp
let row = document.querySelector(".row");

for (let index = 0; index < 3; index++) {
  // Tạo một phần tử sản phẩm mới
  let productItem = document.createElement("div");
  productItem.classList.add("col-3", "product-item");

  let html = `
    <div class="card" style="width: 18rem">
      <div style="width: 230px" class="ms-4">
        <img
          src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-den-thumb-600x600.jpg"
          class="card-img-top w-100"
          alt="..."
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">Iphone 14 Promax</h5>
        <p class="card-text mb-2">San xuat boi Apple.</p>
        <span class="product-item-stars text-warning fs-4">★★★★☆</span>
        <div class="d-flex align-items-center">
          <div class="me-3">30.000.000 d</div>
          <i class="fa-solid fa-cart-shopping" style="color: #fa3200"></i>
        </div>
      </div>
    </div>`;

  // Đặt nội dung HTML cho phần tử sản phẩm
  productItem.innerHTML = html;

  // Thêm phần tử sản phẩm vào .row
  row.appendChild(productItem);
}
