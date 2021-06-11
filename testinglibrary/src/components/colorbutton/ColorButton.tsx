import React, { Component, PureComponent } from "react";

interface ColorButtonState {
  color: "red" | "blue";
}

class ColorButton extends PureComponent<{}, ColorButtonState> {
  constructor(props: any) {
    super(props);

    this.state = {
      color: "red",
    };
  }

  onClickHandler = () => {
    this.setState((state) => {
      if (state.color === "red")
        return {
          color: "blue",
        };
      return {
        color: "red",
      };
    });
  };
  render() {
    return (
      <button
        style={{ background: this.state.color }}
        onClick={this.onClickHandler}
      >
        Change to {this.state.color === "red" ? "blue" : "red"}
      </button>
    );
  }
}

export default ColorButton;
