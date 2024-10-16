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
// let filedata=document.getElementById("file").value;

let togglechatbtn= document.querySelector(".chat-toggle span");;
let chatbot=document.querySelector(".chatbot");
let closechatbot = document.querySelector(".chatbot  .closechat");

togglechatbtn.onclick=function() {
    
 chatbot.classList.toggle("show");
}
closechatbot.onclick = function(){
    chatbot.classList.remove("show");
}

let inputform = document.querySelector(".chatbot .input-chat");
let msgtext = document.querySelector(".chatbot .msg-text");
let chatarea = document.querySelector(".chatbot .chat-area");

const propmts =[["hi","hello","hey","good morning","good afternoon"],
["how are you","how is live","how are things"],
["what are you doing","what is up","what is going on"],
["how old are you"],
["who are you","are you human","are you bot","are you human or bot"],
["your name please","your name","may i know your name"],["what is your name","what call yourself"],
["i love you"],
["happy","good","wonderful","fun","fantastic","cool"],
["bad","bored","tired"],
["help me","tell me story","tell me a joke"],
["ah","yes","ok","okey","nice"],
["bye","good bye","goodbye","see you later"]];


const replies =[["Hello","Hi","Hi there!"],
["Fine... how are you?","Pretty well, how are you?","Fantastic,how are you?"],
["Nothing match","About to go to sleep"],
["i am infinite"],
["i am just a bot"],["i am a bot. what are you?"],
["the one true developer, ashraf shaaban"]]
const alters = ["Same","Go on...","Sorry, i don't understand","Try again"];

const robot =["How do you do, fellow human","I'm not a robot"];

inputform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const msrtext= msgtext.value;
    if(!msrtext) return;
    msgtext.value ="";
    addChat("human",msrtext);
    output(msrtext);


})

function output(input){
    let product;
    let text = input.toLowerCase().trim();

    

    if(text.match(/^h\w/gi)){
     product = replies[0][Math.floor(Math.random() * replies[0].length)];
    }else if(text.match(/^(thank|thanks|thanks you)/gi)){
        product = "You're welcome";
    }else if(text.match(/test/gi)){
        product = ' What is your app? ' + "<br> </br>" +
         '-Web App \n' + "<br> </br>" +
         '-Mobile App \n' + "<br> </br>" + 
         '-Other ';
       
    }
    else if(text.match(/(web|mobile|other)/gi)){
        product = `Thank you for choosing Qzentrum,  <br></br> 
        -Please fill out the form <a style={text-decoration:none;} href="../contactus.html"> Contant-Us</a> and marketing team will contact you soon`;
       
    }
    else if(text.match(/^wh\w/gi)){
        product =replies[2][Math.floor(Math.random()*replies[2].length)];;
    }
    else if(text.match(/(robot|bot|robo)/gi)){
        product= robot[Math.floor(Math.random() * robot.length)];
    }else{
        product=alters[Math.floor(Math.random() * alters.length)];
    }
    const delay = input.split(" ").length * 100;
    setTimeout(() => {
        addChat("bot",product);
    }, 1000);
}
// function  compare(promptarray,repliesarray,string){
//    let reply;
//    let replyFound=false;

//    for(let i=0;i<promptarray.length;i++){
//     for(let y=0;y<promptarray[i].length;y++){
//         if(promptarray[i][y] === string){
//             let replies = repliesarray[i];
//             reply= replies[Math.floor(Math.random()* replies.length)];
//             replyFound=true;
//             break;
//         }
//     }
//     if(replyFound) {break;}
//    }
//    return reply;
// }
function addChat(side,text){
    const msghtml=
    `
    <div class="chat ${side}">
          <p>${text}</p>
        </div>
    `
    chatarea.insertAdjacentHTML("beforeend",msghtml);
    chatarea.scrollTop += 500;

}
function sendMail(){
    let parms ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_b8nwfkl","template_d5n8gr9",parms).then(alert("We have Received your mail"));
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("message").value="";
 };
