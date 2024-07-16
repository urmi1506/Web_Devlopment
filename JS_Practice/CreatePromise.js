const cart=["Tops","Jeans","Shoes"];

const promise=createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
})

function createOrder(cart){
    const pr =new Promise(function(resolve,reject){
       
    })
}