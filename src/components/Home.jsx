import { Navbar } from "./Navbar"
import "../styles.css"

export function Home(){

    return(
        <div className="Home">
            <Navbar/>
            <p className="text">
                Welcome to my skills website. Here I will layout my resume, classes, and projects
            </p>
            <div class="circleSpinner">
                <span class="loading">LOADING</span>
            </div>  
        </div>
    )
}