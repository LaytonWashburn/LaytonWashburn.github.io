import "../styles.css"

export function Home(){

    return(
        <div className="Home">
            <p className="text">
                Welcome to my skills website. Here I will layout my resume, classes, and projects
            </p>
            <div className="circleSpinner">
                <span className="loading">LOADING</span>
            </div>  
        </div>
    )
}