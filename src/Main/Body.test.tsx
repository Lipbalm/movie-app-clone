import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import Body from "./Body";
import { createMemoryHistory } from "history";

const setup = () => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <Body />
      </Router>
    )
  };
};
describe("<Body />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it("CardWidget HeadLink Click", () => {
    const { getByText, container } = setup();
    const cardWidgetHeadLink = getByText("더보기");

    expect(container.innerHTML).toMatch("2020년");

    fireEvent.click(cardWidgetHeadLink);

    expect(container.innerHTML).toMatch(/ThemePage/);
  });

  it("Card Click", () => {
    const { getAllByTestId, container } = setup();
    const cards = getAllByTestId("card");

    expect(container.innerHTML).toMatch("2020년");
    fireEvent.click(cards[0]);

    expect(container.innerHTML).toMatch(/ItemPage/);
  });
});
