import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ThemePage from "./ThemePage";

function setup() {
  return { ...render(<ThemePage />) };
}

describe("<ThemePage />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
