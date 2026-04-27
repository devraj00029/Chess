function getPawnMove(color,board, row, col) {
    const Boffset = [0,1]
    const Woffset = [0,-1]
    if(board[row][col][1]==='w'){
        
    }
}

function getKnightMove(board, row, col) {
    const offset = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]]

    let legalMoves = []

    for(let i=0;i<8;i++){
        let validSquare = [offset[i][0]+row,offset[i][1]+col];
        if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
            legalMoves.push(validSquare)
        }
    }

    return legalMoves
}

function getBishopMove(board, row, col) {
    const offset = [[-1,-1],[1,1],[-1,1],[1,-1]]

    let legalMoves = []

    for(let i=0;i<4;i++){
        let step = 1;
        while(true){
            let validSquare = [(offset[i][0]*step)+row,(offset[i][1]*step)+col]
            if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
                legalMoves.push(validSquare);
                step++;
            }
            else break;
        }
    }
    return legalMoves

}

function getRookMove(board, row, col) {
    const offset = [[0,-1],[0,1],[-1,0],[1,0]]

    let legalMoves = []

    for(let i=0;i<4;i++){
        let step = 1;
        while(true){
            let validSquare = [(offset[i][0]*step)+row,(offset[i][1]*step)+col]
            if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
                legalMoves.push(validSquare);
                step++;
            }
            else break;
        }
    }
    return legalMoves
}


function getQueenMove(board, row, col) {
    const offset = [[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,1],[-1,1],[1,-1]]

    let legalMoves = []

    for(let i=0;i<8;i++){
        let step = 1;
        while(true){
            let validSquare = [(offset[i][0]*step)+row,(offset[i][1]*step)+col]
            if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
                legalMoves.push(validSquare);
                step++;
            }
            else break;
        }
    }
    return legalMoves
}

function getKingMove(board, row, col) {
    const offset = [[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,1],[-1,1],[1,-1]]
    let legalMoves = []
    for(let i=0;i<8;i++){
        let validSquare = [offset[i][0]+row,offset[i][1]+col]
        if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
            legalMoves.push(validSquare);
        }
    }
    return legalMoves
}

function getLegalMove(board, row, col){
    const type = board[row][col];
    if(!type) return [];
    else if(type[0] === 'n') return getKnightMove(board,row,col)
    else if(type[0]==='b') return getBishopMove(board,row,col)
    else if(type[0]==='r') return getRookMove(board,row,col)
    else if(type[0]==='q') return getQueenMove(board,row,col)
    else if(type[0]==='k') return getKingMove(board,row,col)
    else if(type[0]==='p') return getPawnMove(board,row,col)
}

export default getLegalMove