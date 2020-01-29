import React from "react";
import { render } from "@testing-library/react";
import VideoItem from "./VideoItem";
import { seasonOne, VideoItemData } from "../../Test/TempData/BreakingBad";

const {
  title,
  air_date,
  overview,
  episode_number,
  episode_id,
  image_path
} = VideoItemData;
const setup = () => {
  return {
    ...render(<VideoItem {...VideoItemData} />)
  };
};
describe("<VedioItem />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it("set props", () => {
    const { getByText } = setup();
    const episode_title = getByText(`${episode_number}. ${title}`);
    const date = getByText(air_date);
    const storyOverview = getByText(overview);
  });
});
