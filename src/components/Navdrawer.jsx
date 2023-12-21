import "../styles.css"

export function Navdrawer({styles}){


    return(
        <section className={styles} id="menu-options">
            <a href="" className="drawerlink">Option 1</a>
            <a href="" className="drawerlink">Option 2</a>
            <a href="" className="drawerlink">Option 3</a>
            <a href="" className="drawerlink">Option 4</a>
            <a href="" className="drawerlink">Option 5</a>
        </section>
    )
}