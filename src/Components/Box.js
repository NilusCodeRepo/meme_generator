
import { useState } from "react"

export default function Box(props){

    console.log(props.id +"box val "+props.on)
    


    const style={
        backgroundColor:props.on===true?"#222222" : "White"
    }
    return(
        <div className="box--item" style={style}   onClick={()=>props.handleClick(props.id)}>

        </div>
    )
} 