import React, { useState } from 'react';



export default function Counter(props){

const [val, trackVal]=useState(0) 



function minus(){
trackVal(preVal=> preVal-1)
}

function plus(){
trackVal(preVal  => preVal +1)
}

    return(
        <div>
            <span>{val}</span>
            <button onClick={minus}>-</button>  <button onClick={plus}> +</button>

        </div>
    )
}