import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Layout = () => {
  return (
    <main id="layoutMain" className="h-full min-h-screen mx-auto">
      <h1 className="hidden">Main SPA Page</h1>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
