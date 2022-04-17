import react,{useState} from 'react'

export default function TextForm(){
const [text,setText]=useState("something......")


function handleClick(){
    let newText=text.toUpperCase()
    setText(newText)
}
    return(
        <div>
            <h1>Enter Text Here . . .. </h1>
<textarea   value={text} cols="120" rows="20"/><br></br>
<button onClick={handleClick}>UpdateText</button>
        </div>
    )
}
