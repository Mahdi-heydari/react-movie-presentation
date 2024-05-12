import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";
import NotFound from "../components/NotFound";
import About from "../pages/About";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {path: "/", element: <App/>, children: [
    {path:"/", element:<Home/>},
    {path:"search/:id", element:<SearchResult/>, errorElement:<NotFound/>},
    {path:"/about", element:<About/>, errorElement:<NotFound/>},
    {path:"/services", element:<Services/>, errorElement:<NotFound/>},
    {path:"/pricing", element:<Pricing/>, errorElement:<NotFound/>},
    {path:"/contact", element:<Contact/>, errorElement:<NotFound/>}
  ] , errorElement:<NotFound/>}, 
])
