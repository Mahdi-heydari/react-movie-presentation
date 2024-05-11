import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  {path: "/", element: <App/>, children: [
    {path:"/", element:<Home/>},
    {path:"search/:id", element:<SearchResult/>, errorElement:<NotFound/>}
  ] , errorElement:<NotFound/>}, 
])
