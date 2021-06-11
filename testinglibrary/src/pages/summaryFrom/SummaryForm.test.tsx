import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "./SummaryForm";

describe("<SummaryForm/> tests", () => {
  beforeEach(() => {
    render(<SummaryForm />);
  });
  it("should render a checkbox which is unchecked by default", () => {
    const checkbox = screen.getByRole("checkbox", { name: "Toggle" });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });
  it("should render a button which is enabled by default", () => {
    const button = screen.getByRole("button", { name: "Click" });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
  it("should disable the button when checkbox is checked and enabled when the checkbox is unchecked", () => {
    const button = screen.getByRole("button", { name: "Click" });
    const checkbox = screen.getByRole("checkbox", { name: "Toggle" });
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeDisabled();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeEnabled();
  });
});
