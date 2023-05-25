import React from "react";
import Navbar from "../organisms/Navbar";
import { Outlet } from "react-router-dom";

const CurationLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CurationLayout;
