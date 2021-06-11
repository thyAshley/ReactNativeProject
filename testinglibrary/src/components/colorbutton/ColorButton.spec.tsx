import { fireEvent, render, screen } from "@testing-library/react";
import ColorButton from "./ColorButton";

describe("Test ColorButton", () => {
  beforeEach(() => {
    render(<ColorButton />);
  });

  it("should have the correct initial setup", () => {
    const button = screen.getByRole("button", { name: /change to blue/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: "red",
    });
  });

  it("should change bgColor to blue when clicked", () => {
    let button = screen.getByRole("button", { name: /change to blue/i });
    fireEvent.click(button);
    expect(button).toHaveStyle({
      backgroundColor: "blue",
    });
    expect(button.textContent).toBe("Change to red");
  });

  it("should render an enabled button and unchecked checkbox", () => {
    const button = screen.getByRole("button", { name: /change to blue/i });
    expect(button).toBeEnabled();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("should disable the button when the checkbox is checked", () => {
    const button = screen.getByRole("button", { name: /change to blue/i });
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
    expect(checkbox).toBeChecked();
  });
});
