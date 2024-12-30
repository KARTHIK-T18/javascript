let gameSeq = [];
let userSeq = [];

let btncolor=["a","b","c","d"];
let started = false;
let level = 0;
let highscore=0;
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});

let h2=document.querySelector("h2");

function gameflash(btn){
    btn.classList.add("gameflash");

    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
 
function levelup(){
    userSeq=[];
    level++;
    // console.log(`Level ${level}`);
    h2.innerText=`Level ${level}`;
    //random button choose+
    let ind=Math.floor(Math.random()*3);
    let rndbtn=btncolor[ind];
    let btn=document.querySelector(`.${rndbtn}`);
    gameSeq.push(rndbtn);
    console.log(gameSeq);
    gameflash(btn);
}

function checkans(idx) {
   
     console.log("curr level:",level);
    console.log(idx);
     if(highscore<level){
        highscore=level;
     }
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelup , 1000);
        }

    }
    else{
        h2.innerHTML = `game over!your score was <b>${level}</b> <br> highest score is<b>${highscore} <br> pres any key to start`;  

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset()
    }
  
}
function btnpressed(){
    let btn=this;
    userflash(btn); 
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkans(userSeq.length-1);
}

let btns=document.querySelectorAll(".btn");

for(btn of btns){
    btn.addEventListener("click",btnpressed);
}

function reset(){
    started=false;
    level=0; 
    gameSeq=[]; 
    userSeq=[];

}