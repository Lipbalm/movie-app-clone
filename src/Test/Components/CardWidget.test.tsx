import React from "react";
import { render } from "@testing-library/react";
import CardWidget from "../../Components/WidgetComponents/CardWidget";
import { BrowserRouter } from "react-router-dom";

const setup = () => {
  const utils = render(
    <BrowserRouter>
      <CardWidget />
    </BrowserRouter>
  );
  return { ...utils };
};

describe("<CardWidget />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
