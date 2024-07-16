function pow(x, n) {
    var result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  var x = prompt("x?");
  var n = prompt("n?");
  
  if (n < 1) {
    alert(`Power ${n} is not supported`);
  } else {
    alert( pow(x, n) );
  }
  