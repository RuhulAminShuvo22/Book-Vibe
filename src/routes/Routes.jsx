import { createBrowserRouter } from "react-router-dom";
import Books from "../assets/Pages/Books/Books";
import HomePage from "../assets/Pages/HomePage/HomePage";
import MainLayout from "../Layout/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    
    children: [
      {
        index: true ,
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <Books></Books>
      }
    ]
  },

  
]);