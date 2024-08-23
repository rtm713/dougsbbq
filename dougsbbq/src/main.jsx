import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import LandingPage from './components/LandingPage.jsx';
import Recipes from './components/Recipes.jsx';


const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  children:[
    {
      index: true,
      element: <LandingPage/>,
    },
    {
      path: "Recipes",
      element: <Recipes/>,
    },
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)