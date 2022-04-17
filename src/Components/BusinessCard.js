import react,{useState} from 'react'
import logo from '../Assets/avtar.png'
import star from '../Assets/star.png'
import Star from './Star'

export default function BusinessCard(){
    const[Contact,setContact]=useState({
        firstName: "Nilam Bhagde",
        phone: "+91-8965412563",
        email: "nilambhagde86@gmail.com",
        isFavorite:false

    })

function toggleFavorite(){
    setContact(Contact =>{
       return {
           ...Contact,
           isFavorite:!Contact.isFavorite
       }
    })
}
let star_img=Contact.isFavorite==true?"star.png":"empty_star.png"
    return(
        <div className="card">
            <img src={logo}  className="card--profile"/>
            <Star isFilled={Contact.isFavorite}  handleClick={toggleFavorite}/>
            <p className="card--name">{Contact.firstName}</p>
            <p className="card--no">{Contact.phone}</p>    
            <p className="card--email">{Contact.email}</p>



        </div>
    )
}