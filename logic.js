let players = ["x", "o"];
let activePlayer;
let board;
const boardLength = 3;


function startGame() {
    board = [];
    for (let i = 0; i < boardLength; i++) {
        const row = [];
        for (let j = 0; j < boardLength; j++) {
            row.push(null);
        }
        board.push(row);
    }

    activePlayer = 0;

    renderBoard(board);
}

function click(row, column) {
    board[row][column] = players[activePlayer];
    renderBoard(board);

    let isWin = checkWin(players[activePlayer]);
    if(isWin) {
        showWinner(activePlayer);
        return;
    }

    activePlayer = (activePlayer === 0) ? 1 : 0;
}

function checkWin(symbol) {
    return (
        isRowWin(symbol) ||
        isColumnWin(symbol) ||
        isMainDiagonalWin(symbol) ||
        isSecondaryDiagonalWin(symbol)
    );
}

function isRowWin(symbol) {
    for (let i = 0; i < boardLength; i++) {
        let isWin = true;
        for (let j = 0; j < boardLength; j++) {
            if(board[i][j] !== symbol) {
                isWin = false;
                break;
            }
        }
        if (isWin) {
            return true;
        }
    }
    return false;
}

function isColumnWin(symbol) {
    for (let i = 0; i < boardLength; i++) {
        let isWin = true;
        for (let j = 0; j < boardLength; j++) {
            if(board[j][i] !== symbol) {
                isWin = false;
                break;
            }
        }
        if(isWin) {
            return true;
        }
    }
    return false;
}

function isMainDiagonalWin(symbol) {
    for (let i = 0; i < boardLength; i++) {
        if(board[i][i] !== symbol) {
            return false;
        }
    }
    return true;
}

function isSecondaryDiagonalWin(symbol) {
    for(let i = 0; i < boardLength; i++) {
        if(board[i][boardLength - i - 1] !== symbol) {
            return false;
        }
    }
    return true;
}