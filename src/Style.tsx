import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

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
  border-style: groove;
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
    body{
        padding: 0;
        margin: 0;
        width:100%;
        height:100%
    }
    a{
      text-decoration: none;
    }
`;

const HeaderLinkWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  width: 1200px;
  margin: 0px auto;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  height: 5rem;
`;
const HeaderList = styled.div`
  display: flex;
`;

const HeaderItem = styled.div`
  margin-left: 20px;
`;

const HeaderLink = styled(Link)`
  font-weight: 800;
  color: black;
  :hover {
    color: green;
  }
`;

const CardWidgetWrapper = styled.div`
  margin: auto;
  padding-top: 15px;
`;

const WidgetHead = styled.div`
  display: flex;
  align-items: center;
`;

const WidgetLink = styled(Link)`
  color: #797979;
  font-size: 1.1rem;
  margin-left: auto;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  font-weight: 300;
`;

const WidgetContents = styled.div`
  /* padding-top: 24px; */
  /* padding: 24px; */
  /* border-style: groove; */
`;

const WidgetContentsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface RectCardProps {
  isMargin: boolean;
}

const RectCard = styled.div<RectCardProps>`
  width: 220px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in;
  margin-left: ${props => (props.isMargin ? "20px" : "0px")};
`;

const WidgetWarn = styled.div`
  text-align: center;
  width: inherit;
  height: inherit;
`;

const ThumnailWrapper = styled.div`
  width: 220px;
  height: 282px;
  position: relative;
  overflow: hidden;
`;

const ThumnailImg = styled.img`
  text-align: center;
  width: 220px;
  height: 282px;
`;

export {
  AppContainer,
  HeaderContainer,
  RouterHomeContainer,
  CarouselContainer,
  GlobalStyle,
  HeaderLinkWrapper,
  HeaderList,
  HeaderItem,
  HeaderLink,
  BodyWrapper,
  CardWidgetWrapper,
  WidgetHead,
  WidgetLink,
  WidgetContents,
  WidgetContentsInner,
  RectCard,
  WidgetWarn,
  ThumnailWrapper,
  ThumnailImg
};
