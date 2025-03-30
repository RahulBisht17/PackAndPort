import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SideMenuBar from "./SideMenuBar";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <SideMenuBar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
