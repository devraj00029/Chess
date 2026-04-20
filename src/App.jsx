import React, { useState } from "react";
import createInitialBoard from "./board.js";


const App = () =>{
  let Board = []
  const [board,setBoard] = useState(createInitialBoard());


  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){

      const square = `${String.fromCharCode(97+j)}${8-i}`

      if((i+j)%2==0){
        Board.push(
          <div key={square} className="bg-ink h-full w-full text-cream">
            {board[i][j]}
          </div>
        )
      }
      else{
        Board.push(
          <div key={square} className="bg-cream  h-full w-full">
            {board[i][j]}
          </div>
        )
      }
    }
  }

  return(
    <div className="flex justify-center items-center h-screen w-screen bg-ink">
      <div className="grid aspect-square w-[33vw] grid-cols-8 grid-rows-8 border-2 border-cream  shadow-[0px_0px_45px_10px_rgba(177,117,230,1)]">
        {Board}
      </div>
    </div>
  )

}

export default App