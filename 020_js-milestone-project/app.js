const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameBoardElement = document.getElementById('game-board'); // ol
/*
OrderList 가 아닌 list 하나하나를 상수화 시킨 경우 
const gameFieldElements = document.querySelectorAll('#game-board li')
*/

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

startNewGameBtnElement.addEventListener('click',startNewGame);

gameBoardElement.addEventListener('click', selectGameField);
/*
Order List 에 이벤트리스너를 동작시켜도 정상적으로 작동한다. 
List 하나하나에 eventlistner를 적용시킨 경우는 아래와 같다. 
for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click',selectGameField);
} 
 */