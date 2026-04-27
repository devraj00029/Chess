function getPawnMove(board, row, col) {
    
}

function getKnightMove(board, row, col) {
    const offset = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]]

    let KnightLegalMoves = []

    for(let i=0;i<offset.length;i++){
        let validSquare = [offset[i][0]+row,offset[i][1]+col];
        if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
            KnightLegalMoves.push(validSquare)
        }
    }

    return KnightLegalMoves
}

function getBishopMove(board, row, col) {}

function getRookMove(board, row, col) {}

function getQueenMove(board, row, col) {}

function getKingMove(board, row, col) {}

function getLegalMove(board, row, col){
    const type = board[row][col];
    if(!type) return [];
    else if(type[0] === 'n') return getKnightMove(board,row,col)
}

export default getLegalMove