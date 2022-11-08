
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";

const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );

  export default AppLayout