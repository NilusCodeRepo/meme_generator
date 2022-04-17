import react , {useState} from 'react'

export default function StateArrayDemo(){
    const[items,setItems]=useState([])

    function handleClick(){
        setItems(prevItems =>{
            return [...prevItems,`Item ${prevItems.length + 1}`]
        })
    }

    const Elements=items.map(item=>{
        return <p key={item}>{item}</p>
    })
    return(
        <div>
            <button onClick={handleClick}>ADD ITEM</button>
            <h1>Added Items</h1>
            <div>
                {Elements}
            </div>
        </div>
    )
}
