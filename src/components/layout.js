import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main> {/* Acts as the flexible content area */}
      <Footer /> {/* Footer will stick to the bottom */}
    </>
  );
};

export default Layout;
