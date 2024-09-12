let p1 =0;
let p2 =0;
let choice = document.querySelectorAll(".c");
let mgs = document.querySelector(".m1");
let player1=document.querySelector("#p1");
let player2=document.querySelector("#p2");
choice.forEach( (choice)=>{
    choice.addEventListener("click",()=>{
        let play=choice.getAttribute("id");
        com(play);
    }
)
}
);

const com = (user)=>{
let computer = random();
if (computer===user){
draw();
}else{
    let win= true;
    if(user==="rock"){
       win = computer==="paper"? false:true;

    }else if(user=== "paper"){
        win = computer==="scissors"? false:true;
    }else{
        win = computer==="rock"? false:true;
    }
    Show(win);
}
}
function Show(win){
 if(win){
    mgs.innerHTML = "The user has won the round";
    p1++;
    mgs.style.backgroundColor ="#28a745";
 }else {
    mgs.innerHTML = "The computer has won the round";
    mgs.style.backgroundColor ="#dc3545";
    p2++;
 }
player1.innerHTML = p1;
player2.innerHTML = p2;
}
function draw()
{
mgs.innerHTML = "this round concluded in a draw";
 mgs.style.backgroundColor ="#ffc107";
}

const random= ()=>{
    const opt= ["rock","paper","scissors"];
  const ran= Math.floor(Math.random()*3);
  return opt[ran];
}