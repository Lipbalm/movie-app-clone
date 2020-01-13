import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWidgetWrapper = styled.div`
  margin: auto;
  padding-top: 15px;
  width: 100%;
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

const WidgetContents = styled.div`
  display: flex;
  width: 100%;
  padding-top: 24px;
`;

const WidgetContentsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const RectCardMd = styled.div`
  width: 13.75rem;
  height: 23.75rem;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in;
  :hover {
    cursor: pointer;
    box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.5);
  }
`;

const RectCardLg = styled.div`
  width: 36.75rem;
  height: 24rem;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in;
  :hover {
    cursor: pointer;
    box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.5);
  }
`;

const RectCardSm = styled.div`
  width: 11.25rem;
  height: 11.25rem;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in;
  :hover {
    cursor: pointer;
    box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.5);
  }
`;

const WidgetWarn = styled.div`
  text-align: center;
  width: inherit;
  height: inherit;
  font-size: 0.7rem;
`;

const CardThumnailWrapper = styled.div`
  width: inherit;
  height: 17.625rem;
  position: relative;
  overflow: hidden;
`;

const ThumnailWrapper = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  overflow: hidden;
`;

const ThumnailImg = styled.img`
  text-align: center;
  width: inherit;
  height: inherit;
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

const Separater = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ebdddd;
  margin-top: 1rem;
  position: relative;
`;

const Segment = styled.div`
  width: 7rem;
  height: 4px;
  background-color: #e34d4d;
  top: -1px;
  position: absolute;
`;

export {
  CardWidgetWrapper,
  WidgetHead,
  WidgetLink,
  WidgetContents,
  WidgetContentsInner,
  RectCardMd,
  RectCardLg,
  RectCardSm,
  WidgetWarn,
  CardThumnailWrapper,
  ThumnailWrapper,
  ThumnailImg,
  CardLabelContainer,
  GerenTag,
  TitleTag,
  Separater,
  Segment
};
