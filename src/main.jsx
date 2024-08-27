import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import Services from './pages/Services';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "About Us",
    element: <About />
  },
  {
    path: "Services",
    element: <Services />
  },
  // {
  //   path: "Contact",
  //   element: <Contact />
  // },
  // {
  //   path: "Product/:id",
  //   element: <Product />
  // },
  // {
  //   path: "ShopProduct/:id",
  //   element: < />
  // },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
