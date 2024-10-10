// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Store from './components/Store.jsx';
import Contact from './components/Contact.jsx';




const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/about', element: <About/>},
  {path: '/store', element: <Store/>},
  {path: '/contact', element: <Contact/>},
])


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router}>

    <App />
    </RouterProvider>   

  // </StrictMode>,
)
