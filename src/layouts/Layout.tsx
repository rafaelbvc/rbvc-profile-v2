import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Layout = () => {
  return (
    <main className=" h-full mx-auto overflow-x-hidden lg:overflow-hidden">
      <h1 className="hidden">Main SPA Page</h1>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
