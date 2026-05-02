let boxbtn=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxbtn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked:");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disabledBoxes=()=>{
    for(let box of boxbtn){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxbtn){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let posVal1=boxbtn[pattern[0]].innerText;
        let posVal2=boxbtn[pattern[1]].innerText;
        let posVal3=boxbtn[pattern[2]].innerText;
        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("Winner",posVal1);
                showWinner(posVal1);
            }
        }
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);