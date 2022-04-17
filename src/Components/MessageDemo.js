import { useState } from "react"

export default function MessageDemo(){

    const[Message,setMessage]=useState([])
    return(
        <div>
            <h1>{Message.length>1 && "You have "+Message.length+" unread Messages"}</h1>
            <h1>{Message.length===0 && "You're all caught up"}</h1>
            <h1>{Message.length===1 && "You have a message"}</h1>
        </div>

    )
}