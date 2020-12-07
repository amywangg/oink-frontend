import React, { Component } from "react";
import { Line, Pie } from "react-chartjs-2";
import { Grid, Paper } from "@material-ui/core";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <Line
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: "Timeline of monthly budget ",
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Pie
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: "Category breakdown",
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Chart;
