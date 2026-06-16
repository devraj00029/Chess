import React, { useState } from "react";
import createInitialBoard from "./board.js";
import pieces from "./pieces.js";
import getLegalMove from "./rules.js";

const App = () =>{
  let Board = []
  const [board,setBoard] = useState(createInitialBoard())
  const [selectedSqr,setSelectedSqr] = useState([])
  const [validSqrs,setvalidSqrs] = useState([])
  const [isWhite,setIsWhite] = useState(true)
  const [prevMove,setPrevMove] = useState(null)
  const [kingMove,setKingMove] = useState({"kw" : false, "kb" : false})
  const [rookMove,setRookMove] = useState({"rwR" : false, "rwL" : false , "rbR" : false ,"rbL" : false})
  const [promotion,setPromotion] = useState();

  function handleClick(i,j){
    // first selection
    if(selectedSqr.length === 0){
      if(!board[i][j]) return
      if(board[i][j][1]!=='w' && isWhite) return
      if(board[i][j][1]!=='b' && !isWhite) return 
      setSelectedSqr([i,j])
      setvalidSqrs(getLegalMove(board,i,j,prevMove,kingMove,rookMove))
    }
    // clicking same square
    else if(selectedSqr[0]==i && selectedSqr[1]==j){
      setSelectedSqr([])
      setvalidSqrs([])
    }
    // moving a piece
    else if(board[selectedSqr[0]][selectedSqr[1]]!=null && validSqrs.some(validSqr => validSqr[0]==i && validSqr[1]==j)){
      const newBoard = board.map(i => [...i])
      newBoard[i][j] = newBoard[selectedSqr[0]][selectedSqr[1]]
      newBoard[selectedSqr[0]][selectedSqr[1]] = null

      const isEnPassant =  board[selectedSqr[0]][selectedSqr[1]][0] == 'p' && selectedSqr[1] !=j && !board[i][j]
      if(isEnPassant) newBoard[prevMove.to[0]][prevMove.to[1]] = null

      if(board[selectedSqr[0]][selectedSqr[1]][0] == 'k'){
        if(Math.abs(selectedSqr[1]-j)==2){
          if(j==6){
            newBoard[i][5] = newBoard[i][7]
            newBoard[i][7] = null
          }
          else if(j==2){
            newBoard[i][3] = newBoard[i][0]
            newBoard[i][0] = null
          }
        }
        const kingPiece = `k${board[selectedSqr[0]][selectedSqr[1]][1]}`
        setKingMove({...kingMove, [kingPiece] : true})      
      }

      if(board[selectedSqr[0]][selectedSqr[1]][0] == 'r'){
        const rookPiece = `r${board[selectedSqr[0]][selectedSqr[1]][1]}${selectedSqr[1] === 0 ? 'L' : 'R'}`
        setRookMove({...rookMove,[rookPiece]:true})
      }

      const color = board[selectedSqr[0]][selectedSqr[1]][1]  
      const isPromotion = board[selectedSqr[0]][selectedSqr[1]][0] == 'p' && ((color == 'w' && i==0) || (color=='b' && i==7))
      if(isPromotion){
        setPromotion({row:i,col:j,color,from:[selectedSqr[0],selectedSqr[1]]})
        return
      }

      setBoard(newBoard)
      setPrevMove({piece:board[selectedSqr[0]][selectedSqr[1]] ,from:[selectedSqr[0],selectedSqr[1]], to:[i,j]})
      setSelectedSqr([])
      setvalidSqrs([])
      setIsWhite(!isWhite)
    }
    // selecting same colour
    else{
      if(!board[i][j]) return
      if(board[i][j][1]!=='w' && isWhite) return
      if(board[i][j][1]!=='b' && !isWhite) return 
      setSelectedSqr([i,j])
      setvalidSqrs(getLegalMove(board,i,j,prevMove,kingMove,rookMove))
    }
  }

  function handlePromotion(piece){
   const newBoard = board.map(r=>[...r])
   newBoard[promotion.row][promotion.col] = piece + promotion.color
   setBoard(newBoard)
   setIsWhite(!isWhite)
   setPrevMove({piece:newBoard[promotion.row][promotion.col],from:promotion.from,to:[promotion.row,promotion.col]})
   setPromotion(null)
   setSelectedSqr([])
   setvalidSqrs([])
  }


  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      
      const square = [i,j]
      const label = `${String.fromCharCode(97+j)}${8-i}`

      if((i+j)%2===0){
        Board.push(
          <div key={square} onClick={()=>handleClick(i,j)} 
          className={`bg-ink relative h-full w-full flex justify-center items-center` }>
            {board[i][j] && <img src={pieces[board[i][j][1]][board[i][j][0]]} className="h-9/10 pt-1"></img>}
            {validSqrs.some(sqr=>sqr[0]===i && sqr[1]===j)&&
             <div className="absolute bg-white h-5/12 w-5/12 rounded-full"></div>
            }
          </div>
        )
      }
      else{
        Board.push(
          <div key={square} onClick={()=>handleClick(i,j)} 
          className={`bg-violet relative h-full w-full flex justify-center items-center`}>
            {board[i][j] && <img src={pieces[board[i][j][1]][board[i][j][0]]} className="h-9/10 pt-1"></img>}
            {validSqrs.some(sqr=>sqr[0]===i && sqr[1]===j)&&
             <div className="absolute bg-white h-5/12 w-5/12 rounded-full"></div>
            }
          </div>
        )
      }
    }
  }

  return(
    <div className="relative flex justify-center items-center h-screen w-screen bg-ink">
      <div className="grid relative aspect-square h-[35vw] w-[35vw] grid-cols-8 grid-rows-8 border-2 border-cream shadow-[0px_0px_45px_10px_rgba(177,117,230,1)]">
        {Board}
      </div>
      
      <div className="flex rounded-xl flex-col h-[35vw] absolute w-[20vw] right-[9vw] bg-ink border-2 border-cream shadow-[0px_0px_45px_10px_rgba(177,117,230,1)]">
        <div className="flex text-2xl py-6 text-white justify-center items-center">Move</div>
        <div className="">
          <div className="text-violet">hello</div>
        </div>
      </div>
      {promotion &&(
        <div className={`absolute flex flex-row h-[4.375vw] w-[17.5vw] bg-violet ${promotion.color === 'b' ? 'top-3' : 'bottom-3'} border-2 justify-evenly`} style={{left: `calc(50% - 17.5vw + ${2*4.375}vw)`}}>
          <img className="border-r-2" onClick={()=>handlePromotion('q')} src={pieces[promotion.color]['q']}></img>
          <img className="border-r-2" onClick={()=>handlePromotion('n')} src={pieces[promotion.color]['n']}></img>
          <img className="border-r-2" onClick={()=>handlePromotion('b')} src={pieces[promotion.color]['b']}></img>
          <img onClick={()=>handlePromotion('r')} src={pieces[promotion.color]['r']}></img>
        </div>
      )}
      <div className="flex rounded-xl flex-col h-[35vw] absolute w-[20vw] left-[9vw] bg-ink border-2 border-cream shadow-[0px_0px_45px_10px_rgba(177,117,230,1)]"></div>
    </div>
  )
}

export default App