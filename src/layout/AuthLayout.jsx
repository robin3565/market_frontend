import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../atoms/Logo";

const AuthLayout = ({ login }) => {
  return (
    <div className="bg-gray-50"> 
      <header className="flex justify-between max-w-screen-xl flex-wrap items-center mx-auto">
        <div className="p-5 grow">
          <Logo />
        </div>
      </header>
      <section className="w-full h-screen my-auto mx-auto dark:bg-gray-900 flex flex-col justify-center items-center">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
