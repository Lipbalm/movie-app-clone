import React from "react";
import { render } from "@testing-library/react";
import Loader from "../../Components/UtilComponents/Loader";

describe("<Loader />", () => {
  it("snapshot", () => {
    const utils = render(<Loader />);
    expect(utils.container).toMatchSnapshot();
  });

  it("Loader 호출", () => {
    const utils = render(<Loader />);
    expect(utils.getByText("Loading")).toBeTruthy();
  });
});
