function getPawnMove(board, row, col) {
    const Boffset = [1,0]
    const Woffset = [-1,0]
    let legalMoves = []
    if(board[row][col][1]==='w'){
        if(row == 6){
            let step = 1;
            for(let i=0;i<2;i++){
                let validSquare = [(Woffset[0]*step)+row,(Woffset[1]*step)+col]
                if(validSquare[0]<8&&validSquare[1]<8){
                    if(!board[validSquare[0]][validSquare[1]]) legalMoves.push(validSquare)
                    if(board[validSquare[0]][validSquare[1]+1] && board[validSquare[0]][validSquare[1]+1][1] =='b' && i==0){
                        let attackingSqr1= [validSquare[0],validSquare[1] +1]
                        legalMoves.push(attackingSqr1)
                    }
                    if(board[validSquare[0]][validSquare[1]-1] && board[validSquare[0]][validSquare[1]-1][1] =='b' && i==0){
                        let attackingSqr2= [validSquare[0],validSquare[1] -1]
                        legalMoves.push(attackingSqr2)
                    }
                }
                step++;
            }
        }
        else{
            let validSquare = [Woffset[0]+row,Woffset[1]+col]
            if(validSquare[0]>=0 && validSquare[1]>=0){
                if(!board[validSquare[0]][validSquare[1]]) legalMoves.push(validSquare)
                if(board[validSquare[0]][validSquare[1]+1] && board[validSquare[0]][validSquare[1]+1][1] =='b'){
                    let attackingSqr1= [validSquare[0],validSquare[1] +1]
                    legalMoves.push(attackingSqr1)
                }
                if(board[validSquare[0]][validSquare[1]-1] && board[validSquare[0]][validSquare[1]-1][1] =='b'){
                    let attackingSqr2= [validSquare[0],validSquare[1] -1]
                    legalMoves.push(attackingSqr2)
                }
            }
        }
    }
    if(board[row][col][1]==='b'){
        if(row == 1){
            let step = 1;
            for(let i=0;i<2;i++){
                let validSquare = [(Boffset[0]*step)+row,(Boffset[1]*step)+col]
                if(validSquare[0]<8&&validSquare[1]<8){
                    if(!board[validSquare[0]][validSquare[1]]) legalMoves.push(validSquare)
                    if(board[validSquare[0]][validSquare[1]+1] && board[validSquare[0]][validSquare[1]+1][1] =='w' && i==0){
                        let attackingSqr1= [validSquare[0],validSquare[1] +1]
                        legalMoves.push(attackingSqr1)
                    }
                    if(board[validSquare[0]][validSquare[1]-1] && board[validSquare[0]][validSquare[1]-1][1] =='w' && i==0){
                        let attackingSqr2= [validSquare[0],validSquare[1] -1]
                        legalMoves.push(attackingSqr2)
                    }
                }
                step++;
            }
        }
        else{
            let validSquare = [Boffset[0]+row,Boffset[1]+col]
            if(validSquare[0]<8 && validSquare[1]<8 && validSquare[0]>=0 && validSquare[1]>=0){
                if(!board[validSquare[0]][validSquare[1]]) legalMoves.push(validSquare)
                if(board[validSquare[0]][validSquare[1]+1] && board[validSquare[0]][validSquare[1]+1][1] =='w'){
                    let attackingSqr1= [validSquare[0],validSquare[1] +1]
                    legalMoves.push(attackingSqr1)
                }
                if(board[validSquare[0]][validSquare[1]-1] && board[validSquare[0]][validSquare[1]-1][1] =='w'){
                    let attackingSqr2= [validSquare[0],validSquare[1] -1]
                    legalMoves.push(attackingSqr2)
                }
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

function getRookMove(board, row, col) {
    const offset = [[0,-1],[0,1],[-1,0],[1,0]]

    let legalMoves = []

    for(let i=0;i<4;i++){
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

function getKingMove(board, row, col) {
    const offset = [[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,1],[-1,1],[1,-1]]
    let legalMoves = []
    for(let i=0;i<8;i++){
        let validSquare = [offset[i][0]+row,offset[i][1]+col]
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