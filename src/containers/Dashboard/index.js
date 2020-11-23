import React from "react";
import AppPage from "../AppPage/index";
import ChartRender from "./ChartRender";

const Dashboard = () => {
  return (
    <AppPage>
      <h1 style={{ color: "#FF8FB3" }}>DASHBOARD</h1>
      <ChartRender />
    </AppPage>
  );
};

export default Dashboard;
