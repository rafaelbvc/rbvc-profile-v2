import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Layout = () => {
  return (
    <main className="h-full mx-auto overflow-x-hidden lg:overflow-hidden">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
