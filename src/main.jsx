import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './components/Home.jsx'
import { Resume } from './components/Resume.jsx'
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )
