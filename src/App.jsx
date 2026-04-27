import React, { useState } from "react";
import createInitialBoard from "./board.js";
import pieces from "./pieces.js";
import getLegalMove from "./rules.js";

const App = () =>{
  let Board = []
  const [board,setBoard] = useState(createInitialBoard());
  const [selectedSqr,setSelectedSqr] = useState([]);
  const [validSqr,setValidSqr] = useState([]);

  function handleClick(i,j){

    if(selectedSqr.length === 0){
      setSelectedSqr([i,j])
      setValidSqr(getLegalMove(board,i,j))
      console.log(getLegalMove(board,i,j))
    }
    else if(selectedSqr[0]==i && selectedSqr[1]==j){
      setSelectedSqr([])
      setValidSqr([])
    }
    else if(board[selectedSqr[0]][selectedSqr[1]]!=null){
      const newBoard = board.map(i => [...i])
      newBoard[i][j] = newBoard[selectedSqr[0]][selectedSqr[1]]
      newBoard[selectedSqr[0]][selectedSqr[1]] = null
      setBoard(newBoard)
      setSelectedSqr([])
    }
    else{
      setSelectedSqr([i,j])
    }
  }

  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      
      const square = [i,j]
      const label = `${String.fromCharCode(97+j)}${8-i}`

      if((i+j)%2===0){
        Board.push(
          <div key={square} onClick={()=>handleClick(i,j)} className={`${((selectedSqr[0]===i && selectedSqr[1]===j) || validSqr.some(sqr=>sqr[0]===i && sqr[1]===j)) ? "bg-white" : "bg-ink"} h-full w-full text-cream flex justify-center items-center` }>
            {board[i][j] && <img src={pieces[board[i][j][1]][board[i][j][0]]} className="h-9/10 pt-1"></img>}
          </div>
        )
      }
      else{
        Board.push(
          <div key={square} onClick={()=>handleClick(i,j)} className={`${((selectedSqr[0]===i && selectedSqr[1]===j) || validSqr.some(sqr=>sqr[0]===i && sqr[1]===j))? "bg-white" : "bg-cream"} h-full w-full text-ink flex justify-center items-center`}>
            {board[i][j] && <img src={pieces[board[i][j][1]][board[i][j][0]]} className="h-9/10 pt-1"></img>}
          </div>
        )
      }
    }
  }

  return(
    <div className="flex justify-center items-center h-screen w-screen bg-ink">
      <div className="grid aspect-square w-[33vw] grid-cols-8 grid-rows-8 border-2 border-cream shadow-[0px_0px_45px_10px_rgba(177,117,230,1)]">
        {Board}
      </div>
    </div>
  )
}

export default App