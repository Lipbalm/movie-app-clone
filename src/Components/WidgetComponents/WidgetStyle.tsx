import styled from "styled-components";
import { Link } from "react-router-dom";
import { IStyleFrame, IStyle } from "../../Modules/StyleInterfaces";
import { combineStyle } from "../../Modules/utils";

const widgetWrapperStyle: IStyleFrame = {
  basis: {
    "margin": "auto",
    "padding-top": "15px",
    "width": "100%"
  }
};

export const WidgetWrapper = styled.div<IStyle>`
  ${props => combineStyle(widgetWrapperStyle, props.styleObj)}
`;

const widgetHead: IStyleFrame = {
  basis: {
    "display": "flex",
    "align-items": "center"
  }
};

export const WidgetHead = styled.h2<IStyle>`
  ${props => combineStyle(widgetHead, props.styleObj)}
`;

const widgetLinkStyle: IStyleFrame = {
  basis: {
    "color": "#797979",
    "font-size": "1.1rem",
    "margin-left": "auto",
    "display": "-webkit-flex",
    "-webkit-align-items": "center",
    "align-items": "center",
    "font-weight": "300"
  }
};

export const WidgetLink = styled(Link)<{ styleObj?: IStyleFrame }>`
  ${props => combineStyle(widgetLinkStyle, props.styleObj)}
`;

const widgetContentsStyle: IStyleFrame = {
  basis: {
    "display": "flex",
    "width": "100%",
    "padding-top": "24px"
  }
};

export const WidgetContents = styled.div<IStyle>`
  ${props => combineStyle(widgetContentsStyle, props.styleObj)}
`;

const widgetContentsInnerStyle: IStyleFrame = {
  basis: {
    "display": "flex",
    "flex-wrap": "wrap",
    "width": "100%",
    "justify-content": "space-between"
  }
};

export const WidgetContentsInner = styled.div<IStyle>`
  ${props => combineStyle(widgetContentsInnerStyle, props.styleObj)}
`;

const WidgetContentsColumnStyle: IStyleFrame = {
  basis: {
    "display": "block",
    "flex-wrap": "wrap",
    "margin": "0 0 0 0"
  }
};

export const WidgetContentsColumn = styled.div<IStyle>`
  ${props => combineStyle(WidgetContentsColumnStyle, props.styleObj)}
`;

const rectCardStyle: IStyleFrame = {
  basis: {
    "width": "13.75rem",
    "box-shadow": "0 1px 11px 0 rgba(0, 0, 0, 0.1)",
    "transition": "box-shadow 0.3s ease-in"
  },
  pesudo: {
    ":hover": {
      "cursor": "pointer",
      "box-shadow": "0 1px 11px 0 rgba(0, 0, 0, 0.5)"
    }
  }
};

export const RectCard = styled.div<IStyle>`
  ${props => combineStyle(rectCardStyle, props.styleObj)}
`;

const themeItemWrapperStyle: IStyleFrame = {
  basis: {
    "display": "flex",
    "margin": "0 0 0 0",
    "box-shadow": "0 1px 11px 0 rgba(0, 0, 0, 0.1)",
    "transition": "box-shadow 0.3s ease-in"
  },
  pesudo: {
    ":hover": {
      "cursor": "pointer",
      "box-shadow": "0 1px 11px 0 rgba(0, 0, 0, 0.5)"
    }
  }
};
export const ThemeItemWrapper = styled.div<IStyle>`
  ${props => combineStyle(themeItemWrapperStyle, props.styleObj)}
`;

const thumnailWrapper: IStyleFrame = {
  basis: {
    "position": "relative",
    "overflow": "hidden"
  }
};
export const ThumnailWrapper = styled.div<IStyle>`
  ${props => combineStyle(thumnailWrapper, props.styleObj)}
`;

const thumnailStyle: IStyleFrame = {
  basis: {
    "background-size": "contain",
    "position": "absolute",
    "background-repeat": "no-repeat",
    "box-sizing": "inherit",
    "width": "inherit",
    "height": "inherit"
  }
};
export const Thumnail = styled.div<IStyle>`
  ${props => combineStyle(thumnailStyle, props.styleObj)}
`;

const themeItemLayerStyle: IStyleFrame = {
  basis: {
    "position": "absolute"
  }
};
export const ThemeItemLayer = styled.div<IStyle>`
  ${props => combineStyle(themeItemLayerStyle, props.styleObj)}
`;

const bottomTagWrapperStyle: IStyleFrame = {
  basis: {
    "display": "block",
    "padding": "1rem 1rem 1.75rem",
    "background-color": "transparent"
  }
};

export const BottomTagWrapper = styled.div<IStyle>`
  ${props => combineStyle(bottomTagWrapperStyle, props.styleObj)}
`;

const overlayTagWrapperStyle: IStyleFrame = {
  basis: {
    "position": "absolute",
    "width": "80%",
    "bottom": "0",
    "padding": "0",
    "background-color": "transparent"
  }
};
export const OverlayTagWrapper = styled.div<IStyle>`
  ${props => combineStyle(overlayTagWrapperStyle, props.styleObj)}
`;

const bottomGenreTagStyle: IStyleFrame = {
  basis: {
    "display": "block",
    "font-size": "0.9rem",
    "height": "1.5rem",
    "margin-bottom": "4px"
  }
};

export const BottomGerenTag = styled.span<IStyle>`
  ${props => combineStyle(bottomGenreTagStyle, props.styleObj)}
`;

const bottomTitleTagStyle: IStyleFrame = {
  basis: {
    "display": "block",
    "font-size": "1.15rem",
    "font-weight": "600",
    "text-overflow": "ellipsis",
    "overflow": "hidden",
    "white-space": "nowrap"
  }
};

export const BottomTitleTag = styled.a<IStyle>`
  ${props => combineStyle(bottomTitleTagStyle, props.styleObj)}
`;

const overlayTitleTagStyle: IStyleFrame = {
  basis: {
    "display": "block",
    "color": "white",
    "font-weight": "600",
    "text-overflow": "ellipsis",
    "overflow": "hidden",
    "white-space": "nowrap"
  }
};

export const OverlayTitleTag = styled.a<IStyle>`
  ${props => combineStyle(overlayTitleTagStyle, props.styleObj)}
`;

const separaterStyle: IStyleFrame = {
  basis: {
    "width": "100%",
    "height": "2px",
    "background-color": "#ebdddd",
    "margin-top": "1rem",
    "position": "relative"
  }
};
export const Separater = styled.div<IStyle>`
  ${props => combineStyle(separaterStyle, props.styleObj)}
`;

const segmentStyle: IStyleFrame = {
  basis: {
    "width": "7rem",
    "height": "4px",
    "background-color": "#e34d4d",
    "top": "-1px",
    "position": "absolute"
  }
};
export const Segment = styled.div<IStyle>`
  ${props => combineStyle(segmentStyle, props.styleObj)}
`;
