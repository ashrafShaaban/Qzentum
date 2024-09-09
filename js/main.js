let menu=document.querySelector("#header .menu");
let menubtn =document.querySelector("#header .menubtn");
let closebtn = document.querySelector("#header .closemenu");

menubtn.onclick = function (){
    menu.classList.toggle("active");
    
}
closebtn.onclick = function (){
    menu.classList.toggle("active");
    
}
menu.querySelectorAll(".dropdown > i").forEach((arrow)=>{
    arrow.addEventListener("click" , function(){
     this.closest(".dropdown").classList.toggle("active");
    });
});