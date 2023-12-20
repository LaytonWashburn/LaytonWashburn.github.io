import {Link} from "react-router-dom"
import "../styles.css"


export function Navbar(){

    return(
        <nav className="navbar">
            <Link to={"/"} className="links">SKILLS</Link>
            <Link to={"/Resume"} className="links">Resume</Link>
            <Link className="links">Classes</Link>
            <Link className="links">Projects</Link>
        </nav>
    )
}