import logo from "../Assets/troll.png"

export default function Header(){
    return(
        <div className="header">
            <img src={logo} className="header--img"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>

        </div>
    )
}