import React from "react";
import Navbar from "./navigation/nav";
import Footer from "./navigation/index";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;