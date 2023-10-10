const gameboard = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
};

const player = (name, mark) => {
    return {name, mark};
};

const makeMove = (player, row, col) => {
    if (gameboard.board[row][col] === '') {
        gameboard.board[row][col] = player.mark;
        return true;
    } else {
        return false;
    }
};


// TODO: Add a function to check if the game is over and who won
//and display the result and a button to restart the game and clear the board and start over