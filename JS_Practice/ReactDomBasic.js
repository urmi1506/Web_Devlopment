// REACT DOM -HAVE 4 PILLARS
//1)Selection of element
var head=document.querySelector("h1");
//2)changing html of element
head.innerHTML="Hii"

//3)changing css of element
/*head.style.color="red"
head.style.backgroundColor="yellow"*/

//4)Eventlistner
head.addEventListener("click",function(){
    head.style.color="red"
    head.style.backgroundColor="yellow"
})
