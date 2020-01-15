import React from "react";
import { render } from "@testing-library/react";
import { BottomTag, OverlayTag } from "./CardTag";
import { tempCard } from "../../Test/TempData/Card";
import { getGenreIds } from "../../Modules/apis";
//import { changeGenreIdToName } from "../../Modules/utils";

const { genre_ids, title } = tempCard;

const cardTagSetup = () => {
  return {
    ...render(<BottomTag genres={genre_ids.join("/")} title={title} />)
  };
};

const overlayTagSetup = () => {
  return { ...render(<OverlayTag title={title} />) };
};

describe("<CardTag /> & <OverlayTag />", () => {
  it("SnapShot", () => {
    const { container } = cardTagSetup();
    expect(container).toMatchSnapshot();
  });

  it("CardTag 장르 및 이름 보이기", () => {
    const { getByTestId } = cardTagSetup();
    const genre = getByTestId("genre");
    const name = getByTestId("title");
    expect(genre).toHaveTextContent(genre_ids.join("/"));
    expect(name).toHaveTextContent(title);
  });

  it("OverlayTag", () => {
    const { container } = overlayTagSetup();
    expect(container).toMatchSnapshot();
  });
});
