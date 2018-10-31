import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: "",
      bold: false,
      italic: false,
      underline: false
    };
  }
  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      if (this.state[style]) {
        return (
          <button
            onClick={() => this.setState({ [style]: !this.state[style] })}
            style={{ ...styles[style], backgroundColor: "blue" }}
            key={style}
          >
            {style}
          </button>
        );
      }
      return (
        <button
          onClick={() => this.setState({ [style]: !this.state[style] })}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          onClick={() => this.setState({ textColor: color })}
          key={color}
        />
      );
    });

    let daStyle = () => {
      let style = {};
      style.color = this.state.textColor;
      if (this.state.bold) {
        style.fontWeight = "bold";
      }
      if (this.state.italic) {
        style.fontStyle = "italic";
      }
      if (this.state.underline) {
        style.textDecorationLine = "underline";
      }

      return style;
    };

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea style={daStyle()} />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
