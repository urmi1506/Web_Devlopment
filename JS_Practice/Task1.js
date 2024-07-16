var btn =document.querySelector("button");
var h4 =document.querySelector("h4");

var flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
        h4.innerHTML="Friends";
        h4.style.color="green";
        btn.innerHTML="Remove Friend";
        flag=1;  
    }
    else{
        h4.innerHTML="Stangers";
        h4.style.color="red";
        btn.innerHTML="Add Friend";
        flag=0; 
    }
   
})