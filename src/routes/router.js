import {createBrowserRouter} from "react-router-dom";
import React from "react";
import TopPage from "../TopPage";
import ErrorPage from "../Pages/ErrorPage"
import {Layout} from "../Components/Layout/Leyout"

export const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<TopPage/>
      }]
  }])