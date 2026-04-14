import React from "react";

const App = () =>{
let Board = []

for(let i=0;i<8;i++){
  for(let j=0;j<8;j++){

    if((i+j)%2==0){
      Board.push(
        <div className="bg-ink h-full w-full">

        </div>
      )
    }
    else{
      Board.push(
        <div className="bg-cream  h-full w-full">

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