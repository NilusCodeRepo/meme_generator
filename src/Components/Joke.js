import { useState } from "react"

export default function Joke(props){

    const[isShown,setShow]=useState(false)


    function toggle(){
       // alert("clicked")
        setShow(prevVal=>{
            const val=!prevVal
           // alert(val)
            return val
        })

    }




    return(
        <div>
            <h1>{props.setup}</h1> 
            <h3>{isShown && props.punch}</h3>
            <button onClick={toggle}>{isShown===true?"Hide Punchline":"Show Punchline"}</button>
        </div>
    )
}