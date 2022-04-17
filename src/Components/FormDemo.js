import { useState } from "react"

export default function FormDemo(){

    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"", 
        contact:"",
        comments:"",
        isFriendly:true,
        employment:"",
        favColor:""

    })

    console.log(formData)

    function handleChange(event){
        const {name,value,type,checked}=event.target

        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [name]:type==="checkbox"?checked:value

            }
        })

    }

    function handleSubmit(event)
    {
       // event.preventDefault()
        alert("Data is successfully submited.")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}> 
                <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange} 
                />

                <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                />

                <input 
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                />

                <input 
                type="number"
                name="contact"
                placeholder="Phone"
                value={formData.contact}
                onChange={handleChange}
                />

               <textarea cols="20" rows="10"
               name="comments"
               value={formData.comments}
               placeholder="Write something here...."
               onChange={handleChange}

               /> 

               <input 
               type="checkbox"
               id="isFriendly"
               checked={formData.isFriendly}
               onChange={handleChange}
               name="isFriendly"
               className="checkbox"        
               />

               <label htmlFor="isFriendly" >Are You Friendly?</label>

               <fieldset>
                   <legend>Current  Employment Status </legend>
                   <input 
                   type="radio"
                   id="unemployed"
                   name="employment"
                   value="unemployed"
                   checked={formData.employment==="unemployed"}
                   onChange={handleChange}

                   />

                   <label htmlFor="umemployed">Unemployed</label>

                   <input  
                   type="radio"
                   id="part-time"
                   name="employment"
                   value="part-time"
                   checked={formData.employment==="part-time"}
                   onChange={handleChange}

                   />
                    <label htmlFor="part-time">Part-time</label>

                    <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment==="full-time"}
                    onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                   
               </fieldset>
               <br></br>

               <label htmlFor="favColor">What is your favorite color?</label><br/>
               <select 
               name="favColor"
               id="favColor"
               value={formData.favColor}
               onChange={handleChange}
               >
                   <option value="">-- Choose --</option>
                   <option value="red">Red</option>
                   <option value="Green">Green</option>
                   <option value="Blue">Blue</option>
                   <option value="Yellow">Yellow</option>
                   <option value="Orange">Orange</option>
               </select>   

                <button>Submit</button>






            </form>
        </div>
    )

}