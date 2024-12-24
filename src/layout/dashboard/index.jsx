import React from "react";
import logo from "../../assets/logo.png";
import { Button } from "antd";
import { ToTopOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div style={{ height: "80vh", borderRight: "1px solid"}}>
      <div style={{ marginTop: "60px", width: "100%",display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{width: "190px"}}>
          <img src={logo} style={{width: "100%"}}/>
        </div>

        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            paddingTop: "60px"
          }}
        >
          <Button
            style={{
              height: "45px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "#197BBD",
            }}
          >
            Overview
          </Button>
          <Button
            style={{
              height: "45px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "#197BBD",
            }}
          >
            Transactions
          </Button>
          <Button
            style={{
              height: "45px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "#197BBD",
            }}
          >
            Cards
          </Button>
          <Button
            style={{
              height: "45px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "#197BBD",
            }}
          >
            Invoices
          </Button>
          <Button
            style={{
              height: "45px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "#197BBD",
            }}
          >
            Goals
          </Button>
          <Button
            style={{
              height: "45px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "#197BBD",
            }}
          >
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
