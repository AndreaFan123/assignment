import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Component", () => {
  test("renders the Home component", () => {
    render(<Home />);
    const levelOneLink = screen.getByText(/Level 1/i);
    const levelTwoLink = screen.getByText(/Level 2/i);

    expect(levelOneLink).toBeDefined();
    expect(levelTwoLink).toBeDefined();
  });
});
