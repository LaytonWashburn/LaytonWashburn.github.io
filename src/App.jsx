import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Iconbar } from './components/Iconbar'

function App() {

  return (
    <>
      <Navbar/>
      <Iconbar/>
      <Outlet/>
    </>
  )
}

export default App
