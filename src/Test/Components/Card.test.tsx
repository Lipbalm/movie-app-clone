import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "../../Components/WidgetComponents/Card";
import { tempCard } from "../TempData/Card";
import { baseImageURL } from "../../Modules/apis";

const setup = () => {
  const utils = render(<Card card_info={tempCard} index={0} />);
  return { ...utils };
};

describe("Card Component", () => {
  it("Card SnapShot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it("Card 썸네일 못 불러올 경우", () => {
    const { getByAltText } = setup();
    const alt = getByAltText("no image");
    expect(alt).toBeTruthy();
  });

  it("Card 이미지 렌더 테스트", () => {
    const { getByAltText } = setup();
    const alt = getByAltText("no image");
    expect(alt).toHaveAttribute(
      "src",
      `${baseImageURL}${tempCard.poster_path}`
    );
  });

  it("Card Margin 확인", () => {
    const utils = setup();
    const { getByTestId } = utils;
    const RectCard = getByTestId("card");

    expect(RectCard).toHaveStyle(`
      margin-left: 0;
    `);
  });

  it("Card Click", () => {
    const { getByTestId } = setup();
    const RectCard = getByTestId("card");

    fireEvent.click(RectCard);

    expect(RectCard).toHaveTextContent(
      `${tempCard.genre_ids.join("/")}${tempCard.title}`
    );
  });
});
