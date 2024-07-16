// 1. create order 2.do payment 3.payment summary

const cart=["Top","Jeans","Shoes"];

api.creatOrder(cart,function(){

    api.proceedPayment(function(){
        
        api.paymentSummary(function(){

        })
    })
})