import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import CardWidget from "../../Components/WidgetComponents/CardWidget";
import { Router } from "react-router-dom";
import { tempCards } from "../TempData/Card";
import { CardWidgetWrapper } from "../../Styles/WidgetStyle";

const setup = () => {
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <CardWidget head_text="2020년 1분기 기대신작 애니" cards={tempCards} />
    </Router>
  );
  return { ...utils };
};

describe("<CardWidget />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it("CardWidget HeadText", () => {
    const { getByText } = setup();
    getByText("2020년 1분기 기대신작 애니");
  });

  it("CardWidget HeadLink", () => {
    const { getByText } = setup();
    getByText("더보기");
  });

  it("CardWidget get Contents", () => {
    const { getAllByTestId } = setup();
    const cards = getAllByTestId("card");

    cards.forEach((v, i) => {
      expect(v).toHaveTextContent(tempCards[i].title);
    });
  });
});
