import { useState } from "react"
import boxesData from "./boxesData"
import Box2 from "./Box2"

export default function BoxParct2(){
    const[BoxState, setBoxState]=useState(boxesData)

    function toggle(id){
        setBoxState(prevData=>{
          return  prevData.map(item=>{
                return item.id===id?{...item,on:!item.on}:item
               
            })
           
        })
    }
    const boxElements=BoxState.map(box=>{
        return <Box2  key={box.id} id={box.id}on={box.on} onClick={toggle} />
    })

    return(
        <div className="box">
            {boxElements}
        </div>
    )
}