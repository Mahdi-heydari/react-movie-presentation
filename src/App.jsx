import { Outlet } from "react-router-dom";
import NavbarSite from "./ui/NavbarSite";

export default function App() {
  return (
    <>
      <NavbarSite/>
      <Outlet/>
    </>
  )
}
