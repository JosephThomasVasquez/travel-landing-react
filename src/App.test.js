import { render, screen } from "@testing-library/react";
import App from "./App";

test("Contains Travel text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Travel/i);
  expect(linkElement).toBeInTheDocument();
});
