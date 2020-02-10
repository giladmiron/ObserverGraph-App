import React from "react";

class LineSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      gain: 1,
      offset: 0
    };
  }
  colors = [
    "white",
    "silver",
    "gray",
    "black",
    "red",
    "maroon",
    "yellow",
    "olive",
    "lime",
    "green",
    "aqua",
    "teal",
    "blue",
    "navy",
    "fuchsia",
    "purple"
  ];

  changeLine = (event, property) => {
    this.setState(
      {
        [property]: event.target.value
      },
      () => {
        let currentState = this.props.currentState;
        currentState[property] = this.state[property];
        this.props.changeLineState(this.props.line, currentState);
      }
    );
  };

  render() {
    let props = this.props;
    return (
      <div>
        <h2>Line {props.line}</h2>

        <label htmlFor={`line-color-${props.line}`}>Color: </label>
        <select
          id={`line-color-${props.line}`}
          value={this.state.color}
          onChange={event => this.changeLine(event, "color")}
        >
          <option value="" defaultValue disabled hidden>
            Choose here
          </option>
          {this.colors.map(color => {
            return (
              <option value={color} key={color}>
                {color}
              </option>
            );
          })}
        </select>

        <label htmlFor={`line-gain-${props.line}`}>Gain: </label>
        <input
          id={`line-gain-${props.line}`}
          value={this.state.gain}
          onChange={event => this.changeLine(event, "gain")}
          type="text"
        ></input>

        <label htmlFor={`line-offset-${props.line}`}>Offset: </label>
        <input
          value={this.state.offset}
          onChange={event => this.changeLine(event, "offset")}
          id={`line-offset-${props.line}`}
          type="text"
        ></input>
      </div>
    );
  }
}

export default LineSettings;
