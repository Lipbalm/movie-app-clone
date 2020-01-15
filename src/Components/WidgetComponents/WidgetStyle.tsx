import styled, { isStyledComponent } from "styled-components";
import { Link } from "react-router-dom";
import { IStyleProps } from "../../Modules/Interfaces";

const WidgetWrapper = styled.div`
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

const WidgetContentsColumn = styled.div<IStyleProps>`
  display: flex;
  flex-wrap: wrap;
  margin: ${props => props.padding};
`;

const RectCard = styled.div`
  width: 13.75rem;
  height: 23.75rem;
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

interface IBase {
  basis: Object;
  effect: Object;
}

export interface IStyledProps {
  styleObj: Object;
}

const ThemeItemWrapperStyle: IBase = {
   basis: {
    "display": "flex;",
    "margin": "flex;",
    "box-shadow": "0 1px 11px 0 rgba(0, 0, 0, 0.1);",
    "transition": "box-shadow 0.3s ease-in;"
  },
  effect: {
    ":hover": {
      "cursor": "pointer;",
      "box-shadow": "0 1px 11px 0 rgba(0, 0, 0, 0.5);"
    }
  }
};

const a = [{
  "display": "flex;",
  "margin": "0 0 0 0;",
  "box-shadow": "0 1px 11px 0 rgba(0, 0, 0, 0.1);",
  "transition": "box-shadow 0.3s ease-in;"
},{
  ":hover": {
    "cursor": "pointer;",
    "box-shadow": "0 1px 11px 0 rgba(0, 0, 0, 0.5);"
  }
}]

const combineStyle = (origin:Array<Object>, replace: Array<Object>) => {
  const [originBasis, originEffect] = origin;
  const [replaceBasis, replaceEffect] = replace;

  const combineBasis = Object.assign(originBasis, replaceBasis);

  const combineEffect = Object.entries(replaceEffect).forEach(v => )
};

const ThemeItemWrapper = styled.div<IStyledProps>``;

// const ThemeItemWrapper = styled.div<IStyleProps>`
//   display: flex;
//   margin: ${props => props.margin};
//   box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
//   transition: box-shadow 0.3s ease-in;
//   :hover {
//     cursor: pointer;
//     box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.5);
//   }
// `;

const ThumnailWrapper = styled.div<IStyleProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  overflow: hidden;
`;

const Thumnail = styled.div`
  text-align: center;
`;

const ThemeItemLayer = styled.div<IStyleProps>`
  position: absolute;
`;

const BottomTagContainer = styled.div`
  display: block;
  padding: 1rem 1rem 1.75rem;
  background-color: transparent;
`;

const OverlayTagContainer = styled.div<IStyleProps>`
  position: absolute;
  width: 80%;
  bottom: 0;
  padding: ${props => props.padding};
  background-color: transparent;
`;

const BottomGerenTag = styled.span`
  display: block;
  font-size: 0.9rem;
  height: 1.5rem;
  margin-bottom: 4px;
`;

const BottomTitleTag = styled.a`
  display: block;
  font-size: 1.15rem;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const OverlayTitleTag = styled.a<IStyleProps>`
  display: block;
  color: white;
  font-size: ${props => props.fontSize};
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
  WidgetWrapper,
  WidgetHead,
  WidgetLink,
  WidgetContents,
  WidgetContentsInner,
  RectCard,
  WidgetWarn,
  ThumnailWrapper,
  Thumnail,
  BottomTagContainer,
  OverlayTagContainer,
  BottomGerenTag,
  BottomTitleTag,
  OverlayTitleTag,
  Separater,
  Segment,
  WidgetContentsColumn,
  ThemeItemWrapper,
  ThemeItemLayer
};
