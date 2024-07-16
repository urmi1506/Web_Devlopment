const cart=["Top","Jeans","Shoes"];

// problem: CallBackHell
// creatOrder(cart,function(orderId){

//     proceedPayment(orderId,function(paymentInfo){
        
//         paymentSummary(paymentInfo,function(){

//  UpdateBal()       })
//     })
// })


// sol:Promise chain
// its imp to return data here otherwise sometime it loose d data

const promise=createOrder(cart)

promise.then(function(orderId){

    return proceedPayment(orderId);
})
.then (function(paymentInfo){
    return PaymentSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateBal(paymentInfo);
})

// u can write it without creating const promise

// also write using arrow function