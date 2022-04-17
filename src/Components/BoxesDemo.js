import { useState } from "react"
import boxesData from "./boxesData"
import Box from "./Box"

export default function BoxesDemo(){
const[squares,setSquares]=useState(boxesData)

const boxes=squares.map(square=>{
    return <Box 
            key={square.id}
            id={square.id}
            on={square.on}
            handleClick={toggle}
            
            />
})

function toggle(id){
    setSquares(prevSquare=>{
        return prevSquare.map(sq=>{
            return sq.id === id?{...sq,on:!sq.on}:sq
            
        })

        
        
    })
}
console.log("state array")
console.log(squares)


    return(
        <div className="box">
            {boxes}
        </div>
    )
}