function RandomArr(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
  
  const ans = RandomArr(5, 1, 10);
  
  console.log(ans); 
  