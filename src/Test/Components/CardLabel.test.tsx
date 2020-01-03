import React from "react";
import { render } from "@testing-library/react";
import CardLabel from "../../Components/WidgetComponents/CardLabel";

const setup = () => {
  return { ...render(<CardLabel genre_id={13} name={"메트릭스"} />) };
};
describe("CardLabel", () => {
  it("SnapShot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it("CardLabsel 장르 및 이름 보이기", () => {
    const { getByTestId } = setup();
    const genre = getByTestId("genre");
    const name = getByTestId("name");

    expect(genre).toHaveTextContent("SF");
    expect(name).toHaveTextContent("메트릭스");
  });
});
