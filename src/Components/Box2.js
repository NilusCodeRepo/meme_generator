import { useState } from "react"


export default function Box2(props){

    const styles= {
        backgroundColor:props.on?"Black":"white"
    }
      
   

    return(
       
            <div className="box--item" style={styles} onClick={()=>props.onClick(props.id)}>
            </div>
        
    )
}
