var transpose = function(matrix){
    let result = Array.from({ length:matrix[0].length  }, () => Array(matrix.length));
    let n=matrix.length; 
    for(let i=0;i<matrix.length;i++){        
        for(let j=0;j<matrix[0].length;j++){
            result[j][i]=matrix[i][j];
        }
    }
    return result;
};