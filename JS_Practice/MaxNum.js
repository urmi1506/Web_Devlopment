function MaxNum(arr) {
    return Math.max.apply(null, arr);
  }
  const arr1 = [1, 2, 3, 4, 5, 6];
  const maxNumber = MaxNum(arr1);
  
  console.log(maxNumber); 
  