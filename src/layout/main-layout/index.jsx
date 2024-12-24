import React from "react";
import Header from "../header";
import Dashboard from "../dashboard";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1800px" }}>
      <div style={{display: "flex",}}>
        <div style={{width: "20%", marginRight: "40px"}}>
          <Dashboard />
        </div>
        <div style={{width: "80%"}}>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
