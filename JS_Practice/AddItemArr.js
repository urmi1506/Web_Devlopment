var x = 0;
var arr = Array();

function add() {
  arr[x] = document.getElementById("text1").value;
  
  alert("Element: " + arr[x] + " Added at index " + x);
  x++;

  document.getElementById("text1").value = "";
}

function display() {
  var res = "<hr/>"; 

  for (var y = 0; y < arr.length; y++) {
    res += "Element " + y + " = " + arr[y] + "<br/>";
  }
  document.getElementById("Result").innerHTML = res;
}
