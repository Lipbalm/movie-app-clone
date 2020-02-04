import styled from "styled-components";
import { IStyleFrame, IStyle } from "../../Modules/StyleInterfaces";
import { combineStyle } from "../../Modules/utils";
import { Link } from "react-router-dom";

const itemWrapperStyle: IStyleFrame = {
  basis: { "padding": "12px 24px", "display": "flex", "cursor": "pointer" },
  pesudo: {
    ":hover": {
      "background-color": "#fff5f5"
    }
  }
};

export const ItemWrapper = styled.div<IStyle>`
  ${props => combineStyle(itemWrapperStyle, props.styleObj)}
`;
const imageWrapperStyle: IStyleFrame = {
  basis: {}
};
export const ImageWrapper = styled.div<IStyle>`
  ${props => combineStyle(imageWrapperStyle, props.styleObj)}
`;

const stillImageStyle: IStyleFrame = {
  basis: { "width": "100%", "height": "100%" }
};

export const StillImage = styled.img<IStyle>`
  ${props => combineStyle(stillImageStyle, props.styleObj)}
`;

const itemInfoStyle: IStyleFrame = {
  basis: { "margin-left": "8px" }
};

export const ItemInfo = styled.div<IStyle>`
  ${props => combineStyle(itemInfoStyle, props.styleObj)}
`;

const infoTopStyle: IStyleFrame = {
  basis: { "display": "flex", "justify-content": "space-between" }
};

export const InfoTop = styled.div<IStyle>`
  ${props => combineStyle(infoTopStyle, props.styleObj)}
`;

const infoMidStyle: IStyleFrame = {
  basis: { "padding-top": "18px", "color": "#494c62", "font-weight": "100" }
};

export const InfoMid = styled.div<IStyle>`
  ${props => combineStyle(infoMidStyle, props.styleObj)}
`;

const infoBotStyle: IStyleFrame = {
  basis: { "padding-top": "18px" }
};

export const InfoBot = styled.div<IStyle>`
  ${props => combineStyle(infoBotStyle, props.styleObj)}
`;

const itemTitleStyle: IStyleFrame = {
  basis: { "font-weight": "800", "font-size": "1.2rem", "color": "#494c62" }
};

export const ItemTitle = styled(Link)<{ styleObj?: IStyleFrame }>`
  ${props => combineStyle(itemTitleStyle, props.styleObj)}
`;

const itemDateStyle: IStyleFrame = {
  basis: { "color": "#494c62", "font-weight": "400" }
};

export const ItemDate = styled.div<IStyle>`
  ${props => combineStyle(itemDateStyle, props.styleObj)}
`;
