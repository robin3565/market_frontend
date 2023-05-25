import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../atoms/Logo";

const AuthLayout = () => {
  return (
    <div>
      <header className="flex justify-between max-w-screen-xl flex flex-wrap items-center mx-auto">
        <div className="pt-5 px-5 grow">
          <Logo />
        </div>
      </header>
      <section className="flex w-full h-screen flex-col justify-center items-center my-auto mx-auto bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
