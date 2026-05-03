import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Component/Form.jsx'
import NavBer from './Component/NavBer.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/About",
    element:<About/>,
  },
  {
    path: "/Services",
    element:<Services/>,
  },
]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />,
)
