import React from "react";
import { render } from "@testing-library/react";
import CardLabel from "../../Components/WidgetComponents/CardLabel";
import { tempCard } from "../TempData/Card";
import { getGenreIds } from "../../Modules/apis";
import { changeGenreIdToName } from "../../Modules/utils";

const { genre_ids, title } = tempCard;

const asyncSetup = async () => {
  try {
    await getGenreIds("en-US");
  } finally {
    return { ...render(<CardLabel genre_ids={genre_ids} title={title} />) };
  }
};

describe("<CardLabel />", () => {
  it("SnapShot", async () => {
    await asyncSetup().then(res => {
      const { container } = res;
      expect(container).toMatchSnapshot();
    });
  });

  it("CardLabsel 장르 및 이름 보이기", async () => {
    await asyncSetup().then(res => {
      const { getByTestId } = res;
      const genre = getByTestId("genre");
      const name = getByTestId("name");
      expect(genre).toHaveTextContent(changeGenreIdToName(genre_ids));
      expect(name).toHaveTextContent(title);
    });
  });
});
