import React from "react";
import { render } from "@testing-library/react";
import Card from "../../Components/WidgetComponents/Card";
import { TempCard } from "../TempData/Card";

const setup = () => {
  const utils = render(<Card movie={TempCard} index={1} />);
  return { ...utils };
};

describe("Card Component", () => {
  it("Card 확인", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it("Card 썸네일 못 불러올 경우", () => {
    const { findByAltText } = setup();
    const alt = findByAltText("no images");
    expect(alt).toBeTruthy();
  });
});
