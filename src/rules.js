function getPawnMove(board, row, col, prevMove) {
    const color = board[row][col][1]
    const direction = color === 'w'? -1:1
    const startRow = color === 'w'? 6:1
    const enemy = color === 'w'? 'b':'w'

    let legalMoves = []
    console.log(color)
    //1st pawn move
    if(row == startRow){
        let step = 1;
        for(let i=0;i<2;i++){
            let validSquare = [(direction*step)+row,col]
            if((validSquare[0]<8&&validSquare[1]<8) && (validSquare[0]>=0 && validSquare[1]>=0)){
                if(!board[validSquare[0]][validSquare[1]]) legalMoves.push(validSquare)
                else break
                if(board[row+direction][col+1] && board[row+direction][col+1][1] ==enemy && i==0){
                    let attackingSqr1= [validSquare[0],validSquare[1] +1]
                    legalMoves.push(attackingSqr1)
                }
                if(board[row+direction][col-1] && board[row+direction][col-1][1] ==enemy && i==0){
                    let attackingSqr2= [validSquare[0],validSquare[1] -1]
                    legalMoves.push(attackingSqr2)
                }
            }
            step++;
        }
    }

    //pawn move
    else{
        let validSquare = [direction+row,col]
        if((validSquare[0]<8&&validSquare[1]<8) && (validSquare[0]>=0 && validSquare[1]>=0)){

            // en passant
            if(prevMove && prevMove.piece[0]=='p' && prevMove.piece[1]==enemy && prevMove.to[0] == row && Math.abs(prevMove.from[0] - prevMove.to[0]) == 2 && Math.abs(col-prevMove.to[1])==1)
            {
                legalMoves.push([row+direction, prevMove.to[1]])
            }
            if(!board[validSquare[0]][validSquare[1]]) legalMoves.push(validSquare)
            if(board[row+direction][col+1] && board[row+direction][col+1][1] ==enemy){
                let attackingSqr1= [validSquare[0],validSquare[1] +1]
                legalMoves.push(attackingSqr1)
            }
            if(board[row+direction][col-1] && board[row+direction][col-1][1] ==enemy){
                let attackingSqr2= [validSquare[0],validSquare[1] -1]
                legalMoves.push(attackingSqr2)
            }
        }
    }

    return legalMoves
}

function getKnightMove(board, row, col) {
    const offset = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]]

    let legalMoves = []

    for(let i=0;i<8;i++){
        let validSquare = [offset[i][0]+row,offset[i][1]+col];
        if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
            if(board[validSquare[0]][validSquare[1]] && board[validSquare[0]][validSquare[1]][1] === board[row][col][1]){
                continue
            }
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
            
            if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0 ){
                if(!board[validSquare[0]][validSquare[1]]){
                    legalMoves.push(validSquare);
                    step++;
                }
                else if(board[validSquare[0]][validSquare[1]][1] != board[row][col][1]){
                    legalMoves.push(validSquare);
                    step++;
                    break;
                }
                else{
                    break;
                }
            }
            else break;
        }
    }
    return legalMoves

}

function getRookMove(board, row, col,kingMove,rookMove) {
    const offset = [[0,-1],[0,1],[-1,0],[1,0]]

    let legalMoves = []

    for(let i=0;i<4;i++){
        let step = 1;
        while(true){
            let validSquare = [(offset[i][0]*step)+row,(offset[i][1]*step)+col]
            if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
                if(!board[validSquare[0]][validSquare[1]]){
                    legalMoves.push(validSquare);
                    step++;
                }
                else if(board[validSquare[0]][validSquare[1]][1] != board[row][col][1]){
                    legalMoves.push(validSquare);
                    step++;
                    break;
                }
                else{
                    break;
                }
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
                if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0 ){
                if(!board[validSquare[0]][validSquare[1]]){
                    legalMoves.push(validSquare);
                    step++;
                }
                else if(board[validSquare[0]][validSquare[1]][1] != board[row][col][1]){
                    legalMoves.push(validSquare);
                    step++;
                    break;
                }
                else{
                    break;
                }
            }
            }
            else break;
        }
    }
    return legalMoves
}

function getKingMove(board, row, col,kingMove,rookMove) {
    const offset = [[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,1],[-1,1],[1,-1]]
    let legalMoves = []
    const color = board[row][col][1]
    let kingSideClear = true;
    let queenSideClear = true;
    for(let i=0;i<8;i++){
        let validSquare = [offset[i][0]+row,offset[i][1]+col]
        if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
            if(!board[validSquare[0]][validSquare[1]]){
                legalMoves.push(validSquare);
            }
            else if(board[validSquare[0]][validSquare[1]][1] != board[row][col][1]){
                legalMoves.push(validSquare);
            }
        }
    }
    for(let i = col+1;i<7;i++){
        if(board[row][i]){
            kingSideClear = false 
            break
        }
    }
    for(let i=col-1;i>0;i--){
        if(board[row][i]){
            queenSideClear = false
            break
        }
    }
    if(kingSideClear && !kingMove[`k${color}`] && !rookMove[`r${color}R`]){
        legalMoves.push([row,col+2])
    }
    if(queenSideClear && !kingMove[`k${color}`] && !rookMove[`r${color}L`]){
        legalMoves.push([row,col-2])
    }
    return legalMoves
}


function getLegalMove(board, row, col,prevMove,kingMove,rookMove){
    const type = board[row][col];

    if(!type) return [];
    else if(type[0] === 'n') return getKnightMove(board,row,col)
    else if(type[0]==='b') return getBishopMove(board,row,col)
    else if(type[0]==='r') return getRookMove(board,row,col,kingMove,rookMove)
    else if(type[0]==='q') return getQueenMove(board,row,col)
    else if(type[0]==='k') return getKingMove(board,row,col,kingMove,rookMove)
    else if(type[0]==='p') return getPawnMove(board,row,col,prevMove)
}


export default getLegalMove