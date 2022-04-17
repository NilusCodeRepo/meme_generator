import { useState } from "react"
import jokesData from "./jokesData"
import Joke from "./Joke"

export default function JokesDemo(){

    const[Jokes,setJokes]=useState(jokesData)

    const elements=Jokes.map(joke=>{
        return <Joke 
                key={joke.id}
                setup={joke.setup}
                punch={joke.punchline}
                />

    })
    return(
        <div>
            {elements}
        </div>
    )
}