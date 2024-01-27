let boxes = document.querySelectorAll(".box");
let hideBox = document.querySelector(".container");
let hideInput = document.querySelector(".name-box");

let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let num= document.querySelector(".xmsg"); 
let num2 = document.querySelector(".omsg");
let xWin = 0;
let oWin = 0;

let submit = document.querySelector("#submit");

var player1;
var player2;
function iqbal(){
    player1 = document.getElementById("input1").value;
    player2 = document.getElementById("input2").value;

}
iqbal();


let PlayerX = true; // store whose turn player X or Player O
let winchance = [
    [0,1,2],
    [0,3,6],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(PlayerX){
            box.innerText ='X';
            PlayerX = false;
        }else{
            box.innerText = 'O';
            PlayerX = true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disablesBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
    

}
const showWinner = (winner)=>{
    if(winner==="X"){
        msg.innerText = `Congratulations Winner is ${player1}`;
    }else{
        msg.innerText = `Congratulations Winner is ${player2}`;
    }
    msgContainer.classList.remove("hide");
    iqbal();
    if(winner==="X"){
        xWin = xWin + 1;
    }else{
        oWin = oWin + 1;
    }
    num.innerText = `${player1} win ${xWin} times`;
    num2.innerText = `${player2} win ${oWin} times`;
    disablesBoxes();
}

const checkWinner = ()=>{
    for(let pattern of winchance){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val!=""&& pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
               
                showWinner(pos1val);
            }
        }

    }
}
const hello = ()=>{
    console.log("HELLO IQBAL SIR");
}
const resetBtn = ()=>{
    enableBoxes();
}
const submitHide = ()=>{
    hideBox.classList.remove("hidee");
    hideInput.classList.add("hidee");
    

}
newGamebtn.addEventListener("click",resetBtn);
submit.addEventListener("click",submitHide);
submit.addEventListener("click",iqbal);