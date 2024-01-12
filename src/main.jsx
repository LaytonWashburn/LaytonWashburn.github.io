import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './components/Home.jsx'
import { Resume } from './components/Resume.jsx'
import { Projects } from './components/Projects.jsx'
import { Settings } from './components/Settings.jsx'
import { Tutor } from './components/TypingTutor/Tutor.jsx'
import { 
  createHashRouter, 
  RouterProvider 
} from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Resume",
        element: <Resume/>
      },
      {
        path: "/Projects",
        element: <Projects/>
      },
      {
        path: "/Settings",
        element: <Settings/>
      },
      {
        path: "/Tutor",
        element: <Tutor/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )
