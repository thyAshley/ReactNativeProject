import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SummaryForm } from "../pages";

describe("<SummaryForm/> Test", () => {
  beforeEach(() => {
    render(<SummaryForm />);
  });

  it("should return true", () => {
    const popup = screen.queryByText(/no ice cream/i);
    expect(popup).not.toBeInTheDocument();
  });
});
