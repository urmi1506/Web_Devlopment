function sumArr(arr) {
    return arr.reduce(function(sum, num) {
      return sum + num;
    }, 0);
  }
  
  const arr1 = [1, 2, 3, 4];
  const sum = sumArr(arr1);
  
  console.log(sum); 
  