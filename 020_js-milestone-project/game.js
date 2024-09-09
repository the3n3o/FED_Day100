function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML =
        'You won! <span id="winner-name">Player Name</span>';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("Please set custom player names for both players!");
        return;
    }

    resetGameStatus();

    activePlayerNameElement.textContent = players[activePlayer].name;
    // Game Area가 노출되기 전에 미리 Player Name이 노출되어야 하기 때문에 해당 코드를 추가해줌. 그렇지 않으면 게임 시작시 플레이어 네임이 처음에는 노출이 안되기 때문.
    gameAreaElement.style.display = "block";
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if (event.target.tagName !== "LI" || gameIsOver) {
        return;
    }

    const selectField = event.target;

    const selectColumn = selectField.dataset.col - 1;
    const selectRow = selectField.dataset.row - 1;
    // - 1 이라는 연산을 해줬기 때문에 +를 붙히지 않아도 결과값이 Number

    if (gameData[selectRow][selectColumn] > 0) {
        alert("Please select an empty field!");
        return;
    }

    selectField.textContent = players[activePlayer].symbol;
    selectField.classList.add("disabled");

    gameData[selectRow][selectColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();

    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;

    switchPlayer();
}
// 하지만 리스트 사이의 gap 을 클릭할 경우 그 부분도 ol에 속하므로 전체 내용이 X로 바뀌어버림.
// 해당 이슈 해결법은 event.target.tagname 을 통해서 클릭 이벤트가 발생했을때 그 타겟의 태그네임이 LI 가 아닐 경우 아래 함수를 작동시키지 않고 return 시키면 된다.

function checkForGameOver() {
    // Checking the rows for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][0] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }
    // Checking the columns for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }
    // Diagonal : Top left to bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[0][0] === gameData[2][2]
    ) {
        return gameData[0][0];
    }
    // Diagonal : Top right to bottom left
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[2][0] === gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1;
    } // 9라운드 까지 승자가 없을 경우 무승부 처리, 만약 9라운드에 승자가 결정되더라도 무승부 if문 상위에 승자 if문이 return 처리 하므로 문제없음.
    return 0; // 승자가 없는 상태
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = "block";

    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent =
            winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = "It's a draw!";
    }
}
