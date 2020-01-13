import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, RouteComponentProps, match } from "react-router-dom";
import ItemPage from "../../Main/ItemPage";
import { IMatchParams } from "../../Modules/Interfaces";

// let testProps: RouteComponentProps<IMatchParams> = {
//   match:{
//     params:{
//       id:"1"
//     },
//     isExact: true,
//     path: "/item/1",
//     url:""
//   }
// };

const setup = () => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <ItemPage match={} location={} history={} />
      </Router>
    )
  };
};

describe("<ItemPage />", () => {
  it("snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
