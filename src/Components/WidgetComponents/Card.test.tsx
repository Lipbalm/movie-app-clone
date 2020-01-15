import React from "react";
import { render } from "@testing-library/react";
import { CardLg, CardMd, CardSm } from "./Card";
import { tempCard } from "../../Test/TempData/Card";
import { baseImageURL } from "../../Modules/apis";

const setup = () => {
  const utils = render(
    <CardLg card_info={tempCard} index={0} card_path={`/item/${tempCard.id}`} />
  );
  //const utils = render(<CardMd card_info={tempCard} index={0} card_path={`/item/${tempCard.id}`} />)
  //const utils = render(<CardSm card_info={tempCard} index={0} card_path={`/item/${tempCard.id}`} />)
  return { ...utils };
};

describe("<Card />", () => {
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

  // it("Card Click", () => {
  //   const { getByTestId } = setup();
  //   const RectCard = getByTestId("card");

  //   fireEvent.click(RectCard);

  //   expect(RectCard).toHaveTextContent(
  //     `${tempCard.genre_ids.join("/")}${tempCard.title}`
  //   );
  // }
  // );
});
