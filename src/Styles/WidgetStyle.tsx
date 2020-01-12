import styled from "styled-components";
import { Link } from "react-router-dom";
import { VerticalItemProps } from "../Modules/Interfaces";

const CardWidgetWrapper = styled.div`
  margin: auto;
  padding-top: 15px;
`;

const WidgetHead = styled.h2`
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

const WidgetContents = styled.div``;

const WidgetContentsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 40px;
  width: 100%;
`;

const RectCard = styled.div<VerticalItemProps>`
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

const CardLabelContainer = styled.div`
  display: block;
  padding: 1rem 1rem 1.75rem;
`;

const GerenTag = styled.span`
  display: block;
  font-size: 0.9rem;
  height: 1.5rem;
  margin-bottom: 4px;
`;

const TitleTag = styled.a`
  display: block;
  font-size: 1.15rem;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
  ThumnailImg,
  CardLabelContainer,
  GerenTag,
  TitleTag
};
