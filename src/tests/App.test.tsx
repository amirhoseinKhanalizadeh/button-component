import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/ui/Button";

describe("Button Component", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>);

    screen.debug();

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
