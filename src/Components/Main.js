import { useState } from "react"
import memeData from "./memeData"

export default function Main(){

    const[memeImage, setMemeImage]=useState("cartoon.png")
    function getMemeImage(){
        const memeArray=memeData.data.meme
        const randomNum=Math.floor(Math.random() * memeArray.length)
        const url=memeArray[randomNum].url

       setMemeImage(url)

       if(memeImage===""){
           alert("blank")
       }else{
        alert(memeImage)
           
          
          
       }
       
    }
    return(
        <main>
            <div className="form">
                <input type="text"
                placeholder="top text"
                className="form--input"
                />
                <input type="text" 
                placeholder="bottom text"
                className="form--input"

                />
                <button 
                className="form--button"  onClick={getMemeImage}>Get a new meme image.</button>

                <div>
                <img src={require("../Assets/"+(memeImage))}  className="meme--image"/>                </div>

            </div>
        </main>
    )
}