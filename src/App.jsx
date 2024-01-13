import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Iconbar } from './components/Iconbar'
import { Link } from 'react-router-dom'
import "./styles.css"

function App() {

  return (
    <div id='main'> 
      <div id='navbar-container'>
        <Navbar/>        
      </div>
      <div id='iconbar-container'>
        <Iconbar/>
      </div>
      <div id='outlet-container'>
        <Outlet/>
      </div>
      <div id='settings-container'>
        <button id='settings'>
          <Link id='settings-link' to={"/Settings"}>
            <span className="material-symbols-outlined" >
                settings
            </span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default App
