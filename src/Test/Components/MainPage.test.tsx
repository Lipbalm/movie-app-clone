import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MainPage from "../../Main/MainPage";

function setup() {
  return { ...render(<MainPage />) };
}

describe("<MainPage />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
