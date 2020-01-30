import styled from "styled-components";
import { IStyleFrame, IStyle } from "../../Modules/StyleInterfaces";
import { combineStyle } from "../../Modules/utils";
import { Link } from "react-router-dom";

const itemWrapperStyle: IStyleFrame = {
  basis: { "padding": "0.5rem", "display": "flex" }
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
  basis: {}
};

export const StillImage = styled.img<IStyle>`
  ${props => combineStyle(stillImageStyle, props.styleObj)}
`;

const itemInfoStyle: IStyleFrame = {
  basis: {}
};

export const ItemInfo = styled.div<IStyle>`
  ${props => combineStyle(itemInfoStyle, props.styleObj)}
`;

const infoTopStyle: IStyleFrame = {
  basis: { "display": "flex" }
};

export const InfoTop = styled.div<IStyle>`
  ${props => combineStyle(infoTopStyle, props.styleObj)}
`;

const infoMidStyle: IStyleFrame = {
  basis: { "padding-top": "0.3rem" }
};

export const InfoMid = styled.div<IStyle>`
  ${props => combineStyle(infoMidStyle, props.styleObj)}
`;

const infoBotStyle: IStyleFrame = {
  basis: {}
};

export const InfoBot = styled.div<IStyle>`
  ${props => combineStyle(infoBotStyle, props.styleObj)}
`;

const itemTitleStyle: IStyleFrame = {
  basis: { "font-weight": "1000" }
};

export const ItemTitle = styled(Link)<{ styleObj?: IStyleFrame }>`
  ${props => combineStyle(itemTitleStyle, props.styleObj)}
`;

const itemDateStyle: IStyleFrame = {
  basis: {}
};

export const ItemDate = styled.span<IStyle>`
  ${props => combineStyle(itemDateStyle, props.styleObj)}
`;
