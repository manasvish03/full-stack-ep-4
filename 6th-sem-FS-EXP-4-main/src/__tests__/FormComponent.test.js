import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("renders correct text", () => {

  render(<Button text="Click Me"/>);

  const button = screen.getByText("Click Me");

  expect(button).toBeInTheDocument();
});

test("handles click event", () => {

  const handleClick = jest.fn();

  render(<Button text="Click Me" onClick={handleClick}/>);

  fireEvent.click(screen.getByText("Click Me"));

  expect(handleClick).toHaveBeenCalledTimes(1);
});