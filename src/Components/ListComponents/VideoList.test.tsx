import React from "react";
import { render } from "@testing-library/react";
import VideoList from "./VideoList";

const setup = () => {
  return { ...render(<VideoList />) };
};

describe("<VideoList />", () => {
  it("snapshot", () => {});
});
