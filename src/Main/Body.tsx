import React, { FC } from "react";
import { RouterHomeContainer } from "./MainStyle";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import ThemePage from "./ThemePage";
import ItemPage from "./ItemPage";

const Body: FC = () => {
  return (
    <RouterHomeContainer>
      <Route path="/" exact component={MainPage}></Route>
      <Route path="/theme" component={ThemePage}></Route>
      <Route path="/item/:id" component={ItemPage}></Route>
    </RouterHomeContainer>
  );
};

export default Body;
