import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
