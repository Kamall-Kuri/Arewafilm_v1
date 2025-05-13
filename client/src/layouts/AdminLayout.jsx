import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;