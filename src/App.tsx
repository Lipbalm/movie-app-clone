import React from "react";
import { AppContainer, GlobalStyle } from "./Styles/MainStyle";
import Header from "./Main/Header";
import { BrowserRouter } from "react-router-dom";
import Body from "./Main/Body";
const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
