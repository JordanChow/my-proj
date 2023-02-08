import React from "react";
import { Outlet } from "react-router";
import Navbar from "components/Navbar/Navbar";

const WithNav = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default WithNav;
