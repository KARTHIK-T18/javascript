let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let li=document.querySelector("li");
let btn=document.querySelector("button");



btn.addEventListener("click",function (){
  let item=document.createElement("li");
  item.innerText=inp.value;

  let delbt=document.createElement("button");
  delbt.innerText="delete";
  delbt.classList.add("delete");
  item.appendChild(delbt);
  ul.appendChild(item);
  inp.value="";
 });

 ul.addEventListener("click",function (event){

    if(event.target.nodeName=="BUTTON"){
      let item=event.target.parentElement;
      item.remove();
    }
 });




// let delbtns=document.querySelectorAll(".del");
//  for(delbtn of delbtns){
//     delbtn.addEventListener("click",function (){
//       let par=this.parentElement;
//       par.remove();
//       console.log("element delted");
//     });
//  }