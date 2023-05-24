import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="flex w-full h-screen flex-col justify-center items-center my-auto mx-auto bg-gray-50 dark:bg-gray-900">
      <Outlet />
    </section>
  );
};

export default AuthLayout;
