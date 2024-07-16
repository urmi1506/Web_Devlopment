async function getdata1(){
   return new Promise((resolved)=>{
    setTimeout(()=>{
        resolved("Hello...");
    },1000)
   })
}
async function getdata2(){
    return new Promise((resolved)=>{
     setTimeout(()=>{
         resolved("Urmi this side");
     },1500)
    })
 }
 async function showdata(){
    const data1=await getdata1();
    console.log(data1);

    const data2=await getdata2();
    console.log(data2);
 }
 showdata();