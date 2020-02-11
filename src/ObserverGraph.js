import React from "react";
import { Chart } from "react-google-charts";

class ObserverGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate = () => {
    let data = [...this.props.data];
    let gains = this.props.options.gains;
    let offsets = this.props.options.offsets;
    data.forEach((element, index) => {
      if (index === 0) return;
      element.forEach((subElement, index) => {
        if (index === 0) return;
        if (index > 1) return;
        subElement = subElement * gains[index - 1];
        subElement = subElement + offsets[index - 1];
      });
    });
    console.log(data);
  };

  // const chartEvents = [
  //   {
  //     callback: ({ chartWrapper }) => {
  //       const chart = chartWrapper.getChart();
  //       chart.container.addEventListener("click", ev => console.log(ev));
  //     },
  //     eventName: "ready"
  //   }
  // ];

  render() {
    return (
      <div className="chart-container">
        <Chart
          width="100%"
          height="600px"
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={this.props.data}
          options={this.props.options}
          markers={[]}
          // chartEvents={chartEvents}
        />
      </div>
    );
  }
}

export default ObserverGraph;
