import React, { FC } from "react";
import { RouterHomeContainer } from "../Styles/MainStyle";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import ThemePage from "./ThemePage";

const Body: FC = () => {
  return (
    <RouterHomeContainer>
      <Route path="/" exact component={MainPage}></Route>
      <Route path="/theme" component={ThemePage}></Route>
    </RouterHomeContainer>
  );
};

export default Body;
