import react,{useState} from 'react'

export default function ListDemo(){

    const[text,addToList]=useState("")
    console.log(useState)
    function addItem(){
        
    }

    function handleChange(e){
        addToList(e.target.value)
        
    }

    

    return(
        <div>
            <input type="text"  value={text} onChange={handleChange}  className="form--input"/>
            <button onClick={addItem} className="form--button">ADD</button>

            <div>
                <h1>ADDED ITEMS</h1>

            </div>
        </div>
    )
}