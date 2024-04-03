let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#newGame-btn");
let msg = document.querySelector("#msg");
turn1 = true;
const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
let resetGame = () => {
  turn1 = true;
  msgContainer.classList.add("hide");
  enableBtn();
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
  if(turn1){
    box.innerText = "x";
    turn1 = false;
  }else{
    box.innerText = "O";
    turn1 = true;
    
  }
  box.disabled = true;
  checkWinner();
});
});
let disableBtn = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}
  let enableBtn = () => {
    for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
    }
};
let showWinner = (winner) =>{
msg.innerText = `congrats you win ${winner}`
msgContainer.classList.remove("hide");
disableBtn();
}
const checkWinner = () => {
  for(let pattern of winPattern){
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if(p1 != "" && p2 != "" && p3 != "")
    if(p1 === p2 && p2 === p3){
      console.log("winner",p1);
      showWinner(p1);
    };
  };
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);