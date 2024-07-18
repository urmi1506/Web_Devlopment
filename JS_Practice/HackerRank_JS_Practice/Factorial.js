function factorial(n){
    if (n === 0) {
       return 1;
   }
   else if (n<0){
       return "No factorial for negative numbers";
   }
   else if (n > 0){
       let fact = 1;
       for (let i = n ; i > 0; i--){
           fact = fact * i;
       }
       return fact;
   }
   
}
console.log(factorial(5));

