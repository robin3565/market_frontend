import React from "react";
import Navbar from "../organisms/Navbar";
import { Outlet } from "react-router-dom";

const CurationLayout = ({ login }) => {
  return (
    <div>
      <Navbar login={login} />
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CurationLayout;
