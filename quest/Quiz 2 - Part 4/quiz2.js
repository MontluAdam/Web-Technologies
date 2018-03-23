var imgAr = ["house1.png", "house2.png", "house3.png", "house4.png", "house5.png", "house6.png", "house7.png", "house8.png", "house9.png"];
var m = 2;
var pp = 20;

window.addEventListener("load", function(event) {
  for (var i = 1; i < imgAr.length+1; i++) {
    var img = document.createElement("img");
    img.setAttribute("id", "hi" + i); 
    img.style.zIndex = 0;
    img.src = "house" + i + ".png";
    document.getElementById("imgDiv").appendChild(img);
    document.getElementById("hi1").style.zIndex = 1;
  }
  
  document.getElementById("left").addEventListener("click",         
    function() {
      if (m > 9) {
        alert("There are no images left.");
        m = 9;
      } else {
        if (m > 1) {
          var img2 = document.getElementById("hi" + (m - 1));
          img2.style.zIndex = 0;
        }
        var img = document.getElementById("hi" + m);
        img.style.zIndex = 1;
        console.log("m: " + m);
        console.log("m zIndex: " + img.style.zIndex);
        m++;
      }
  });
  
  document.getElementById("right").addEventListener("click", 
    function() {
      if (m < 1) {
        alert("There are no images left.");
        m = 1;
      } else {
        if (m < 9) {
          var img2 = document.getElementById("hi" + (m + 1));
          img2.style.zIndex = 0;
        }
        console.log(m);
        var img = document.getElementById("hi" + m);
        img.style.zIndex = 1;
        console.log("m: " + m);
        console.log("m- zIndex: " + img.style.zIndex);
        m--;
      }
  });
  
});