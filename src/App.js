import React from "react";
import ObserverGraph from "./ObserverGraph";
import ObserverGraphSettings from "./ObserverGraphSettings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphSettings: {},
      graphData: [
        ["Seconds", "Pitch", "Roll", "Yaw"],
        ["1.00", 1000, 400, 200],
        ["2.00", 1170, 460, 260],
        ["3.00", 660, 1120, 310],
        ["4.00", 1030, 540, 210]
      ],
      lineWidth: 2
    };
  }

  changeLineWidth = lineWidth => {
    this.setState({
      lineWidth
    });
  };

  genereateOptions = () => {
    let values = Object.values(this.state.graphSettings).filter(
      element => typeof element === "object"
    );
    let colors = values.map(LineSettings => {
      return LineSettings.color;
    });
    let gains = values.map(LineSettings => {
      return +LineSettings.gain;
    });
    let offsets = values.map(LineSettings => {
      return +LineSettings.offset;
    });
    return { colors, gains, offsets, lineWidth: this.state.lineWidth };
  };

  changeGraphSettings = settings => {
    this.setState({ graphSettings: settings }, () => {
      this.genereateOptions();
    });
  };

  render() {
    return (
      <div className="app-container">
        <ObserverGraph
          data={this.state.graphData}
          options={this.genereateOptions()}
        ></ObserverGraph>

        <ObserverGraphSettings
          changeGraph={this.changeGraphSettings}
          changeLineWidth={this.changeLineWidth}
        ></ObserverGraphSettings>
      </div>
    );
  }
}

export default App;
