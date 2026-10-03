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

    let isWin = checkWin(row, column);
    if(isWin) {
        showWinner(activePlayer);
        return;
    }

    activePlayer = 1 - activePlayer;
}

function checkWin(row, column) {
    const symbol = players[activePlayer];
    return (
        isRowWin(row, symbol) ||
        isColumnWin(column, symbol) ||
        isMainDiagonalWin(symbol) ||
        isSecondaryDiagonalWin(symbol)
    );
}

function isRowWin(row, symbol) {
    for (let i = 0; i < boardLength; i++) {
        if(board[row][i] !== symbol) {
            return false;
        }
    }
    return true;
}

function isColumnWin(column, symbol) {
    for (let i = 0; i < boardLength; i++) {
        if(board[i][column] !== symbol) {
            return false;
        }
    }
    return true;
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