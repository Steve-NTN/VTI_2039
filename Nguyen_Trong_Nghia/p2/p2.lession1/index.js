var myclasses = document.getElementsByClassName("myclass");

// text2.style.color = "#fff";
// text2.style.color = "#fff";
// text2.style.color = "#fff";

// for (var i = 0; i < myclasses.length; i++) {
//   if (i === 2) {
//     var rdItem = myclasses.item(i);
//     rdItem.style.backgroundColor = "black";
//   }
// }


var mytable = document.getElementById("mytable");

var studentQlt = parseInt(prompt("Quantity?"));
var name = "Name";

for (var i = 1; i <= studentQlt; i++) {
  mytable.innerHTML += `<tr><td>${i}</td><td>${name + i}</td></tr>`;
}
