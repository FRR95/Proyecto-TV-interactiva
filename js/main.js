const btns =document.getElementsByClassName("button");
let arrayBtns=Array.from(btns);
let TvScreen=document.getElementById("TvScreen");
let TvOn=false;
let powerButton=document.getElementById("powerButton");


console.log(TvOn);



powerButton.addEventListener("click",()=>{
if(!TvOn){
TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length-1]);
TvScreen.classList.add("channelDefault");
TvOn=true; 
return TvOn;
}
else{
TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length-1]);
TvScreen.classList.add("ScreenBlack");
TvOn=false; 
return TvOn;
}
}
)
 arrayBtns.map(
  item=>{
 item.addEventListener("click",(e)=>{
 if(TvOn){
     TvScreen.classList.remove(TvScreen.classList[TvScreen.classList.length-1]);
     TvScreen.classList.add("channel"+e.target.id.slice(-1));
 }
 })
  }
 )
