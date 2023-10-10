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