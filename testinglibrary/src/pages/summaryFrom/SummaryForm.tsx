import React, { Component } from "react";

interface SummaryFormState {
  checked: boolean;
}

class SummaryForm extends Component<{}, SummaryFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="toggle-button">Toggle</label>
        <input
          id="toggle-button"
          type="checkbox"
          onChange={() =>
            this.setState((state) => ({ checked: !state.checked }))
          }
        />
        <button disabled={this.state.checked}>Click</button>
      </div>
    );
  }
}

export default SummaryForm;
