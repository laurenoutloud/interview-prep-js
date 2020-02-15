var gameOfLife = function(board) {
    let results = Array(board.length).map(x => x = Array(board[0].length));
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            let cell = board[i][j];
            let liveNeighbors = 0;
            
            if (i - 1 >= 0){liveNeighbors += board[i-1][j]};
            if (j - 1 >= 0){liveNeighbors += board[i][j-1]};
            if (i + 1 < board.length){liveNeighbors += board[i+1][j]};
            if (j + 1 < board[i].length){liveNeighbors += board[i][j+1]};
            if (i - 1 >= 0 && j - 1 >= 0){liveNeighbors += board[i-1][j-1]};
            if (i - 1 >= 0 && j + 1 < board[i].length){liveNeighbors += board[i-1][j+1]};
            if (i + 1 < board.length && j + 1 < board[i].length){liveNeighbors += board[i+1][j+1]};
            if (i + 1 < board.length && j - 1 >= 0){liveNeighbors += board[i+1][j-1]};
            //console.log(liveNeighbors);
            if (cell){
                if (liveNeighbors < 2){results[i][j] = 0}
                else if (liveNeighbors > 3){result[i][j] = 0}
                else {results[i][j] = 1};
            } else {
                if (liveNeighbors === 3){results[i][j] = 1};
            }
        }
    }
    return result;
};

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);