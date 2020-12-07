import React from "react";
import AppPage from "../AppPage/index";
import ChartRender from "./ChartRender";
import { Container, Grid } from "@material-ui/core";
import PurchaseHistory from "./PurchaseHistory";

const Dashboard = () => {
  return (
    <AppPage>
      <Container>
        <h1>Dashboard</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PurchaseHistory />
          </Grid>
          <Grid item xs={12}>
            <ChartRender />
          </Grid>
        </Grid>
      </Container>
    </AppPage>
  );
};

export default Dashboard;
