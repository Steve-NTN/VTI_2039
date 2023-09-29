const products = [
    {
        image: "https://via.placeholder.com/150x150",
        title: "Sản phẩm 1",
        brand: "Hãng 1",
        price: 100000,
    },
    {
        image: "https://via.placeholder.com/150x150",
        title: "Sản phẩm 2",
        brand: "Hãng 2",
        price: 200000,
    },
    {
        image: "https://via.placeholder.com/150x150",
        title: "Sản phẩm 2",
        brand: "Hãng 2",
        price: 200000,
    },
    {
        image: "https://via.placeholder.com/150x150",
        title: "Sản phẩm 2",
        brand: "Hãng 2",
        price: 200000,
    },
];

let html = ""

for (let i = 0; i < products.length; i++) {
    html += `
    <div class="col-3">
    <img src="${products[i].image}"
        width="auto" height="300px">
        <p>${products[i].title}</p>
        <p>${products[i].brand}</p>
        <div class="d-flex align-items-center gap-1">

            <div>${products[i].price}<sup>đ</sup></div>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
</div>`
}

document.querySelector(".row").innerHTML = html;

