async function getdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hii there...");
        },1000)
    })
}

async function showdata(){
    const data= await getdata();
    console.log(data);
}
showdata();