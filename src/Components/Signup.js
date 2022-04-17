import { useState } from "react"

export default function Signup(){

    const[regDetails,setRegDetails]=useState({
        email:"",
        password:"",
        confPassword:"",
        newsletter:false
    })

    function handleChange(event){
        const{name,value,type,checked}=event.target
        setRegDetails(prevDetails=>{
            return{
                ...prevDetails,
                [name]:type==="checkbox"?checked:value
            }
        })
    }
console.log(regDetails)
    function handleSubmit(event){
        event.preventDefault()
        const pwdMsg=regDetails.password === regDetails.confPassword ? "Successfully signed up." : "Password doesnt match"
        alert(pwdMsg)
        console.log(regDetails.newsletter?"Thanks for signing up for our Newsletter.":"Thank you.")

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>SIGN UP</legend>
                <input 
                type="text"
                name="email"
                placeholder="Email"
                value={regDetails.email}
                onChange={handleChange}
                />

                <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={regDetails.password}
                onChange={handleChange} 
                />

                <input 
                type="password"
                name="confPassword"
                placeholder="Confirm Password"
                value={regDetails.confPassword}
                onChange={handleChange}
                />

                <input 
                type="checkbox"
                name="newsletter"
                checked={regDetails.newsletter}
                id="newsletter"
                onChange={handleChange}
                />

                <label htmlFor="newsletter">I want to join the newsletter.</label>

                <button>Sign Up</button>
            </fieldset>
            </form>
        </div>
    )
}