import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders frontend testing demo title", () => {
  render(<App />);
  const title = screen.getByText(/Frontend Testing Demo/i);
  expect(title).toBeInTheDocument();
});