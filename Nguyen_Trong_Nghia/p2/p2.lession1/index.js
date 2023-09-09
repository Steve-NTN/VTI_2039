var myclasses = document.getElementsByClassName("myclass");

// text2.style.color = "#fff";
// text2.style.color = "#fff";
// text2.style.color = "#fff";

for (var i = 0; i < myclasses.length; i++) {
  if (i === 2) {
    var rdItem = myclasses.item(i);
    rdItem.style.backgroundColor = "black";
  }
}
