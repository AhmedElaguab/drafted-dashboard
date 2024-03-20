import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Screen1 from './components/screens/Screen1.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Screen1 />,
      },
      {
        path: '/screen2',
        element: <h3 className="text-2xl font-semibold mb-4">Screen #02</h3>,
      },
      {
        path: '/screen3',
        element: <h3 className="text-2xl font-semibold mb-4">Screen #03</h3>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
