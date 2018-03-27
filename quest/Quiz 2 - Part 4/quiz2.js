var imgAr = ["house1.png", "house2.png", "house3.png", "house4.png", "house5.png", "house6.png", "house7.png", "house8.png", "house9.png"];
var m = 1;
var pp = 20;

window.addEventListener("load", function(event) {
  for (var i = 1; i < imgAr.length+1; i++) {
    var img = document.createElement("img");
    img.setAttribute("id", "hi" + i); 
    img.style.zIndex = pp;
    img.src = "house" + i + ".png";
    //img.style.position = "absolute";
    //img.style.left = "0px";
    //img.style.top = "0px";
    document.getElementById("imgDiv").appendChild(img);
    pp--;
  }
  
  document.getElementById("hi1").style.zIndex = 21;

  
  document.getElementById("left").addEventListener("click",         
    function() {
      if (m+1 == 10) {
        alert("There are no images left.");
        m = 9;
      } else {
        setTimeout(iLikeToMoveIt, 100);
        function iLikeToMoveIt() {
          var img = document.getElementById("hi" + m);
          var styleInfo = getComputedStyle(img);
          var left = styleInfo.getPropertyValue("left");
          left = parseInt(left);
          if (left == 350) {
            var img = document.getElementById("hi" + m);
            var styleInfo = getComputedStyle(img);
            var left = styleInfo.getPropertyValue("left");
            left = parseInt(left);
            m++;
            console.log(m);
          } else {
            var img = document.getElementById("hi" + m);
            var styleInfo = getComputedStyle(img);
            var left = styleInfo.getPropertyValue("left");
            left = parseInt(left);
            img.style.left = (++left) + "px";
            setTimeout(iLikeToMoveIt, 1);
          }
        }
      }
  });
  
  document.getElementById("right").addEventListener("click", 
    function() {
      if ((m-1) < 1) {
        console.log(m);
        alert("There are no images left.");
        m = 1;
      } else {
        console.log("m: " + m);
        setTimeout(moveIt, 100);
        function moveIt() {
          var img = document.getElementById("hi" + (m-1));
          var styleInfo = getComputedStyle(img);
          var left = styleInfo.getPropertyValue("left");
          left = parseInt(left);
          if (left == 0) {
            m--;
          } else {
            var styleInfo = getComputedStyle(img);
            var left = styleInfo.getPropertyValue("left");
            left = parseInt(left);
            img.style.left = (--left) + "px";
            setTimeout(moveIt, 1);
          }
        }
      }
  });
});

