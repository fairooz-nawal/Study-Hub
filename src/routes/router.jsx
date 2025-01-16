import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/home/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
            },
            {
                path:"/",
                element: <Root></Root>,
            },

        ]
    },
])
