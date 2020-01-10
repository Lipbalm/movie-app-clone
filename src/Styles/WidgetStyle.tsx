import styled from "styled-components";
import { Link } from "react-router-dom";
import { simpleDevice } from "./MediaStandard";

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
  display: flex;
  flex: 1, 0 auto;
`;

const WidgetContentsInner = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  font-size: 40px;

  @media ${simpleDevice.desktopL} {
    font-size: 38.5px;
  }

  @media ${simpleDevice.desktopM} {
    font-size: 36px;
  }

  @media ${simpleDevice.desktopS} {
    font-size: 34.5px;
  }

  @media ${simpleDevice.laptop} {
    font-size: 32px;
  }

  @media ${simpleDevice.tablet} {
    font-size: 28px;
  }

  @media ${simpleDevice.mobile} {
    font-size: 26px;
  }
`;

interface RectCardProps {
  isMargin: boolean;
}

const RectCard = styled.div<RectCardProps>`
  width: 5.5em;
  height: 9.5em;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in;
  margin-left: ${props => (props.isMargin ? "20px" : "0px")};
`;

const WidgetWarn = styled.div`
  text-align: center;
  width: inherit;
  height: inherit;
  font-size: 8px;
`;

const ThumnailWrapper = styled.div`
  width: inherit;
  height: 282px;
  position: relative;
  overflow: hidden;
`;

const ThumnailImg = styled.img`
  text-align: center;
  width: inherit;
  height: 282px;
`;

export {
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
