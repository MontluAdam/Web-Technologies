var turn = 0;
var arr = [];
var len = 9;
var v = 0;
var count = 0;

window.addEventListener("load", function() {
  var td = document.getElementsByTagName("td");
  for (var i = 0; i < len; i++) {
    var x = td[i].getAttribute("id");
    arr.push(x);  
  }
});

function checkWin(td) {
  
  if (arr[1] == arr[2] && arr[2] == arr[3])
		v = 1;
	else if (arr[4] == arr[5] && arr[5] == arr[6])
		v = 1;
	else if (arr[7] == arr[8] && arr[8] == arr[9])
		v = 1;
	else if (arr[1] == arr[4] && arr[4] == arr[7])
		v = 1;
	else if (arr[2] == arr[5] && arr[5] == arr[8])
		v = 1;
	else if (arr[3] == arr[6] && arr[6] == arr[9])
		v = 1;
	else if (arr[1] == arr[5] && arr[5] == arr[9])
		v = 1;	
    else if (arr[3] == arr[5] && arr[5] == arr[7])
		v = 1;
	else if (arr[1] != '1' && arr[2] != '2' && arr[3] != '3' &&
	         arr[4] != '4' && arr[5] != '5' && arr[6] != '6' &&
            arr[7] != '7' && arr[8] != '8' && arr[9] != '9')
    v = 0;
  
  if (v == 1) {
    if (td == "X") {
      alert("And the player X wins.");  
    }
    else if (td == "O") {
      alert("And the player O wins.")
    }
    else if (count == 9){
      alert("Oooh, draw!");
    }
  }
}
function clicked(x) {
  var td = x.getAttribute("id");
  
  if (v == 0 ) {
    if (x.textContent === "X" || x.textContent === "O") {
      alert("This move cannot be done.");
    } else {
      count++;
      if (turn === 0) {
        turn = 1;
        arr[td] = "X";
        x.textContent = "X";
      } else {
        turn = 0;
        arr[td] = "O";
        x.textContent = "O";
      }
    }
    checkWin(arr[td]);
    if (count == 9) {
      alert("Oooh, draw!");
    }
  }
}