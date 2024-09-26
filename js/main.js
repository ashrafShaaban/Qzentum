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

function sendMail(){
    let parms ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_i6xmfpe","template_az41clx",parms).then(alert("We have Received your mail"));
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("message").value="";
 };
