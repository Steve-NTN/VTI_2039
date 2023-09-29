var TIMEOUT = 1000;

// setTimeout(function () {
//   changeColor("red");
//   setTimeout(function () {
//     changeColor("green");
//     setTimeout(function () {
//       changeColor("blue");
//     }, TIMEOUT);
//   }, TIMEOUT);
// }, TIMEOUT);

$(document).ready(function () {
  // function changeColor(color) {
  //   $("#mytext").css({ color });
  // }

  // function promise(color) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(function () {
  //       resolve(color);
  //     }, TIMEOUT);
  //   });
  // }

  // promise("red")
  //   .then(function (value) {
  //     changeColor(value);
  //     return promise("green");
  //   })
  //   .then((value) => {
  //     changeColor(value);
  //     return promise("blue");
  //   })
  //   .then((value) => {
  //     changeColor(value);
  //   });

  //   async function myDisplay() {
  //     let myPromise = new Promise(function(resolve) {
  //       setTimeout(function() {resolve("I love You !!");}, 3000);
  //     });
  //     document.getElementById("demo").innerHTML = await myPromise;
  //   }
    
});
