import React from "react";
import { render } from "@testing-library/react";
import CardLabel from "../../Components/WidgetComponents/CardLabel";
import { tempCard } from "../TempData/Card";
import { getGenreIds, genreIds } from "../../Modules/apis";
import { changeGenreIdToName } from "../../Modules/utils";

const { genre_ids, title } = tempCard;

const setup = () => {
  const fetchGenres = async () => {
    const result: Promise<string | boolean> = await getGenreIds("en-US");
    console.log(result.then(res => res.toString));
  };
  fetchGenres();

  console.log(genreIds);
  return {
    ...render(<CardLabel genre_ids={genre_ids} title={title} />)
  };
};

describe("<CardLabel />", () => {
  it("SnapShot", () => {
    const { container } = setup();

    console.log(genreIds);
    expect(container).toMatchSnapshot();
  });

  it("CardLabsel 장르 및 이름 보이기", () => {
    const { getByTestId } = setup();
    const genre = getByTestId("genre");
    const name = getByTestId("name");

    expect(genre).toHaveTextContent(changeGenreIdToName(genre_ids));
    expect(name).toHaveTextContent(title);
  });
});
