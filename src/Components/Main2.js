import { useState } from "react"
import memeData from "./memeData"

export default function Main2(){

    const[meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"cartoon.png"
    })

    const[allMemeImages,setAllMemeImages]=useState(memeData)

    function getMemeImage(){
        const array=allMemeImages.data.meme
        alert(array[0])

        const randomNum=Math.floor(Math.random() * array.length)
        setMeme(meme=>{
            return{
                ...meme,
                randomImage:array[randomNum].url
            }
        })
    }

    function handleChange(event)
    {
        const{name,value}=event.target
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [name]:value
            }
        })
    }
       
    
    return(
        <main>
            <div className="form">
                <input type="text"
                placeholder="top text"
                className="form--input"
                name="topText"
                onChange={handleChange}
                />
                <input type="text" 
                placeholder="bottom text"
                className="form--input"
                name="bottomText"
                onChange={handleChange}

                />
                <button 
                className="form--button"  onClick={getMemeImage}>Get a new meme image.</button>

                <div className="meme">
                <img src={require("../Assets/"+(meme.randomImage))}  className="meme--image"/>  
                <h2 className="meme--top--text">{meme.topText}</h2>
 
                <h2 className="meme--bot--text">{meme.bottomText}</h2>
                             </div>

            </div>
        </main>
    )
}