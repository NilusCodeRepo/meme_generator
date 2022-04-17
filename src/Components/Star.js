export default function Star(props){

    const star_img=props.isFilled==true?"star.png":"empty_star.png"

function toggleFavorite(){

}

    return(
        <div>
            <span onClick={toggleFavorite}>
            <img src={require("../Assets/"+(star_img))} className="card--rating"  onClick={props.handleClick}/>
            </span>
        </div>
    )
}