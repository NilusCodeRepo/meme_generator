import react,{useState} from 'react'

export default function ChallengeTernary(){
const[isGoingOut,setStateVal]=useState(true)

function handleClick(){
    
   // var newVal=isGoingOut === true? false:true
    setStateVal(prevState=> !prevState)
}   
        return(
        <div>
            <h1>Do I feel like going out tonight ?</h1>
            <div className="state--val" onClick={handleClick}>
               <h1 className="state--answer"> {isGoingOut===true?"Yes":"No"}</h1>
            </div>
        </div>
    )
}