
function remDuplicates(arr) {
    return arr.filter(function(item, ind) {
      return arr.indexOf(item) === ind;
    });
  }
  const arr1 = [1, 2, 3, 4, 4, 5, 5];
  const ans = remDuplicates(arr1);
  
  console.log(ans); 
  