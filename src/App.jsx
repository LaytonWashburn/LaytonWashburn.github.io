import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Iconbar } from './components/Iconbar'
import { Link } from 'react-router-dom'
import "./styles.css"

function App() {

  return (
    <div id='main'> 
      <Navbar/>
      <Iconbar/>
      <Outlet/>
      <div id='settings-container'>
        <button id='settings'>
          <Link className='links' to={"/Settings"}>
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
