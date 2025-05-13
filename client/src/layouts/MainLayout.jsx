import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="home-main">
        <Outlet context={{ searchQuery }} />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
