import React, { Component } from 'react';
import Chart from './Chart';

class ChartRender extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets:[
          {
            label:'Months',
            fill:false,
            data:[
              953,
              706,
              400,
              655,
            ],
            backgroundColor:[
              '#FF3576',
              '#FF8FB3',
              '#F9DAE4',
              '#FDF6F8',
              '#FFAEC8',
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} legendPosition="bottom"/>
      </div>
    );
  }
}

export default ChartRender;