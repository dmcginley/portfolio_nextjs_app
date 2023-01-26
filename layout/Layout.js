import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <div className="main-grid">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
