console.log('Hello World')
const board = []

function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = '0'
        board[clickedId] = '0';
    }
console.log(board);

//ARRAY ASSIGNMENT
const topRight = board[0]
const topCenter = board[1]
const topLeft = board[2]
const middleRight = board[3]
const middleCenter = board[4]
const middleLeft = board[5]
const bottomRight = board[6]
const bottomCenter = board[7]
const bottomLeft = board[8]

//CHECK FOR WINNER
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    window.alert(`Player ${topLeft} is the winner!`)}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    window.alert(`Player ${topRight} is the winner!`)}
if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    window.alert(`Player ${topLeft} is the winner!`)}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    window.alert(`Player ${middleLeft} is the winner!`)}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    window.alert(`Player ${bottomLeft} is the winner!`)}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    window.alert(`Player ${topLeft} is the winner!`)}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    window.alert(`Player ${topCenter} is the winner!`)}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    window.alert(`Player ${topRight} is the winner!`)}

//CHECK FOR CAT'S GAME
let boardFull = true;
for (let i = 0; i <= board.length; i++){
    if (board[i] === undefined){
        boardFull = false}
}
if (boardFull === true){
        alert("TIED! CAT'S GAME!")
}
}

function reset (arr){
    const board = [];
}