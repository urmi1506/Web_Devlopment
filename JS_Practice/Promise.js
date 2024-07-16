const cart=["Top","Jeans","Shoes"];
// problem:Inversion Of Control
// creatOrder(cart,function(orderId){
//     proceedPayment(orderId,function(){
//     });
// });

// Sol: Promise-here it not create any dependency
const promise=createOrder(cart);

promise.then(function(orderId){

        proceedPayment(orderId);
});