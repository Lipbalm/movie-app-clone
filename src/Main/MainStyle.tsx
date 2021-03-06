import styled, { createGlobalStyle } from "styled-components";

const AppContainer = styled.div`
  width: inherit;
  height: inherit;
`;

const HeaderContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 10;
`;

const RouterHomeContainer = styled.div`
  margin-top: 80px;
`;

const CarouselContainer = styled.div`
  width: inherit;
`;

const BodyWrapper = styled.div`
  margin: 0px auto;
  width: 1200px;
`;

const GlobalStyle = createGlobalStyle`
    html{
      font-size: 16px
    }
    body{
        padding: 0;
        margin: 0;
        font-size: 16px
        font-family: "apple-system","sens-arial"
        /* width:100%;
        height:100%; */
    }
    a{
      text-decoration: none;
    }
`;

export {
  AppContainer,
  HeaderContainer,
  RouterHomeContainer,
  CarouselContainer,
  GlobalStyle,
  BodyWrapper
};
