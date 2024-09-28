import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../index";

describe("Button component test cases", () => {
  const props = {
    name: "Test Button",
    handleClick: jest.fn(),
  };

  it("should render button component", async () => {
    const { findByText } = render(<Button {...props} />);

    const button = await findByText("Test Button");
    expect(button).toBeInTheDocument();
  });

  it("should render call the onClick Event of button component", async () => {
    const { findByText } = render(<Button {...props} />);

    const button = await findByText("Test Button");
    fireEvent.click(button);
    expect(props.handleClick).toHaveBeenCalled();
  });
});
