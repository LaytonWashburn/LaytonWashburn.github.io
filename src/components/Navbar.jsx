import {Link} from "react-router-dom"

export function Navbar(){

    return(
        <nav>
            <Link to={"/Navbar"}>Resume</Link>
            <Link>Classes</Link>
            <Link>Projects</Link>
        </nav>
    )
}