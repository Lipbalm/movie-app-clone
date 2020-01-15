import React from "react";
import { render } from "@testing-library/react";
import { BigItem, TinyItem } from "./ThemeItem";

const itemSetup = (sep: string) => {
  return sep === "B" ? { ...render(<BigItem />) } : { ...render(<TinyItem />) };
};

describe("<BigItem/> & <TinyItem/>", () => {
  it("snapshot", () => {
    const { container } = itemSetup("B");
    expect(container).toMatchSnapshot();
  });

  it("display Item", () => {
    const { getByTestId } = itemSetup("B");

    const item = getByTestId("item");
    const thumnailWrapper = getByTestId("thumnailWrapper");
    const thumnail = getByTestId("thumnail");
    const layer = getByTestId("layer");
    const link = getByTestId("link");

    expect(item).toBeVisible();
    expect(thumnailWrapper).toBeVisible();
    expect(thumnail).toBeVisible();
    expect(layer).toBeVisible();
    expect(link).toBeVisible();
  });
});
