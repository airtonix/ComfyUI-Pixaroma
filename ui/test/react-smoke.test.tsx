import { render, screen } from "@testing-library/react";
import { createElement } from "react";

describe("React test environment", () => {
  it("renders a component in jsdom", () => {
    render(createElement("button", null, "Ready"));

    expect(screen.getByRole("button", { name: "Ready" })).toBeTruthy();
  });
});
