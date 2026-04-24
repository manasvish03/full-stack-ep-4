import { render } from "@testing-library/react";
import Dashboard from "../components/Dashboard";

test("loading snapshot", () => {
  const { container } = render(<Dashboard loading={true} />);
  expect(container).toMatchSnapshot();
});

test("empty snapshot", () => {
  const { container } = render(<Dashboard loading={false} data={[]} />);
  expect(container).toMatchSnapshot();
});

test("error snapshot", () => {
  const { container } = render(<Dashboard error={true} />);
  expect(container).toMatchSnapshot();
});

test("data loaded snapshot", () => {
  const { container } = render(<Dashboard data={["Apple","Banana"]} />);
  expect(container).toMatchSnapshot();
});