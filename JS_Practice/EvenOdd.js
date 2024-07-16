function EvenNum(arr) {
    return arr.filter(function(num) {
      return num % 2 === 0;
    });
  }
  
  const arr1 = [1, 2, 3, 4, 5, 6];
  const evenNumbers = EvenNum(arr1);
  
  console.log(evenNumbers); 
  