import React, { Component, PureComponent } from "react";

interface ColorButtonState {
  color: "MediumVioletRed" | "MidnightBlue";
  checked: boolean;
}

class ColorButton extends PureComponent<{}, ColorButtonState> {
  constructor(props: any) {
    super(props);

    this.state = {
      color: "MediumVioletRed",
      checked: false,
    };
  }

  onClickHandler = () => {
    this.setState((state) => {
      if (state.color === "MediumVioletRed")
        return {
          color: "MidnightBlue",
        };
      return {
        color: "MediumVioletRed",
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
          style={{ background: this.state.checked ? "grey" : this.state.color }}
          onClick={this.onClickHandler}
          disabled={this.state.checked}
        >
          Change to{" "}
          {this.state.color === "MediumVioletRed"
            ? replaceCamelSpace("midnightBlue")
            : replaceCamelSpace("MediumVioletRed")}
        </button>
        <label htmlFor="button-checkbox">Disable button</label>
        <input
          id="button-checkbox"
          type="checkbox"
          onChange={this.onCheckHandler}
          checked={this.state.checked}
          aria-checked={this.state.checked}
        />
      </>
    );
  }
}

export default ColorButton;

export function replaceCamelSpace(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}
