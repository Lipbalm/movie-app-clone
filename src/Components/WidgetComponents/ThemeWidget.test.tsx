import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ThemeWidget from "./ThemeWidget";

const history = createMemoryHistory();
const setup = () => {
  return render(
    <Router history={history}>
      <ThemeWidget />
    </Router>
  );
};

describe("<ThemeWidget", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
