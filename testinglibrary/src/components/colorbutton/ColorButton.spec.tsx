import { fireEvent, render, screen } from "@testing-library/react";
import ColorButton, { replaceCamelSpace } from "./ColorButton";

describe("Test ColorButton", () => {
  beforeEach(() => {
    render(<ColorButton />);
  });

  it("should have the correct initial setup", () => {
    const button = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: "MediumVioletRed",
    });
  });

  it("should change bgColor to blue when clicked", () => {
    let button = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    fireEvent.click(button);
    expect(button).toHaveStyle({
      backgroundColor: "MidnightBlue",
    });
    expect(button.textContent).toBe("Change to Medium Violet Red");
  });

  it("should render an enabled button and unchecked checkbox", () => {
    const button = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    expect(button).toBeEnabled();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("should disable the button when the checkbox is checked", () => {
    const button = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
    expect(checkbox).toBeChecked();
    expect(button).toHaveStyle({
      backgroundColor: "grey",
    });
  });
});

describe("spaces before camel-case letters", () => {
  it("works for no inner capital letters", () => {
    expect(replaceCamelSpace("Red")).toBe("Red");
  });

  it("works for one inner capital letter", () => {
    expect(replaceCamelSpace("MidnightBlue")).toBe("Midnight Blue");
  });

  it("works for multiple capital letter", () => {
    expect(replaceCamelSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
