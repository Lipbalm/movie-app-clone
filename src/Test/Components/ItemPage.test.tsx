import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ItemPage from "../../Main/ItemPage";

const setup = () => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <ItemPage />
      </Router>
    )
  };
};

describe("<ItemPage />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
