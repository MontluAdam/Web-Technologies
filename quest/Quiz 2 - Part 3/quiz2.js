window.addEventListener("load", function(event) {
  var ul = document.getElementById("myList");
  var lis = ul.getElementsByTagName("li");
  var img = document.getElementById("myImg");
  
  for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function() {
      this.style.backgroundColor = "gray";
      var x = this.getAttribute("id");
      if (x === "first") {
        img.src = "house1.png";
      }
      else if (x === "second") {
        img.src = "house2.png";
      }
      else if (x === "third") {
        img.src = "house3.png";
      }
      else if (x === "fourth"){
        img.src = "house4.png";
      }
    });
    
  }
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseout", function() {
      this.style.backgroundColor = "white";
    });
  }
});