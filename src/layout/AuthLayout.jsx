import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center my-auto mx-auto">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
