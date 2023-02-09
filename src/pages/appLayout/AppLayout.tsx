import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import StickyFooter from "../../components/StickyFooter/StickyFooter";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
    <StickyFooter />
  </>
);

export default AppLayout;
