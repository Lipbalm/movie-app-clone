import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MainPage from "./MainPage";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

function setup() {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <MainPage />
      </Router>
    )
  };
}

describe("<MainPage />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
