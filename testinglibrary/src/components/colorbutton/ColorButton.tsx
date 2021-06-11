import React, { Component, PureComponent } from "react";

interface ColorButtonState {
  color: "red" | "blue";
  checked: boolean;
}

class ColorButton extends PureComponent<{}, ColorButtonState> {
  constructor(props: any) {
    super(props);

    this.state = {
      color: "red",
      checked: false,
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

  onCheckHandler = () => {
    this.setState((state) => {
      if (state.checked) {
        return {
          checked: false,
        };
      }
      return {
        checked: true,
      };
    });
  };
  render() {
    return (
      <>
        <button
          style={{ background: this.state.color }}
          onClick={this.onClickHandler}
          disabled={this.state.checked}
        >
          Change to {this.state.color === "red" ? "blue" : "red"}
        </button>
        <input
          type="checkbox"
          onChange={this.onCheckHandler}
          checked={this.state.checked}
        />
      </>
    );
  }
}

export default ColorButton;
