async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          reject("Error Occured");
        },1000)
        
    })
}

async function showdata(){
    
    try {
        const data=await getdata();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
showdata();