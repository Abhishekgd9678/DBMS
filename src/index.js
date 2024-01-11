import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Header from "./HomePage/Header";
import Body from "./HomePage/Body";

const App=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
  
        </>
       

    )


}

const Approuter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            
            }
        ]
    }
]);






ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={Approuter}/>)