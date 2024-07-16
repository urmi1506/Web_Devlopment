// fibonacci series 
var n1=0;
var n2=1;
console.log(n1);
console.log(n2);
for(var i=1 ; i<10 ; i++){
    var n3 = n1+ n2;
    console.log(n3);
    n1=n2;
    n2=n3;
}