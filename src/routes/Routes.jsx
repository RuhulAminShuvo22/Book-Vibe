import { createBrowserRouter } from "react-router-dom";
import Books from "../assets/Pages/Books/Books";
import HomePage from "../assets/Pages/HomePage/HomePage";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../assets/Pages/ErrorPage/ErrorPage";
import BookDetails from "../assets/Pages/BookDetails/BookDetails";


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
      },
      {
        path:"/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/public/booksData.json')
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },

  
]);