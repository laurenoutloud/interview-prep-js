var spiralOrder = function(matrix) {
    if (matrix.length < 1){
        return [];
    }
    let results = [];
    let rowStart = 0, rowEnd = matrix.length - 1;
    let colStart = 0, colEnd = matrix[0].length - 1;
    
    while (colStart <= colEnd && rowStart <= rowEnd){
        for (let i = colStart; i <= colEnd; i++){
            results.push(matrix[rowStart][i]);
        }
        rowStart++;
        
        for (let i = rowStart; i <= rowEnd; i++){
            results.push(matrix[i][colEnd]);
        }
        colEnd--;
        if (rowStart <= rowEnd){
            for (let i = colEnd; i >= colStart; i--){
                results.push(matrix[rowEnd][i]);
            }
            rowEnd--;
        }
        if (colStart <= colEnd){
            for (let i = rowEnd; i >= rowStart; i--){
                results.push(matrix[i][colStart]);
            }
            colStart++;
        }
    }
    return results;
};
spiralOrder([[2,5],[8,4],[0,-1]]);