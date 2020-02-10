import React from "react";
import LineSettings from "./LineSettings";

class ObserverGraphSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: { gain: 1, offset: 0, color: "red" },
      2: { gain: 1, offset: 0, color: "blue" },
      3: { gain: 1, offset: 0, color: "green" },
      lineWidth: 2
    };
  }

  changeLineState = (lineNum, updatedState) => {
    this.setState({ [lineNum]: updatedState }, () => {
      this.props.changeGraph(this.state);
    });
  };

  componentDidMount = () => {
    this.props.changeGraph(this.state);
  };

  changeLineWidth = () => {
    this.props.changeLineWidth(this.state.lineWidth);
  };

  render() {
    return (
      <div className="settings-container">
        <form
          className="settings-form"
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <div className="line-width">
            <label htmlFor="line-width-input">line Width:</label>
            <input
              id="line-width-input"
              value={this.state.lineWidth}
              onChange={event => {
                this.setState({ lineWidth: +event.target.value }, () => {
                  this.changeLineWidth();
                });
              }}
            ></input>
          </div>
          <button className="marker-btn">Add Marker</button>

          {[1, 2, 3].map(lineNum => {
            return (
              <LineSettings
                key={lineNum}
                line={lineNum}
                currentState={this.state[lineNum]}
                changeLineState={this.changeLineState}
              />
            );
          })}
        </form>
      </div>
    );
  }
}

export default ObserverGraphSettings;
