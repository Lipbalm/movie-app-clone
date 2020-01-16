import React, { FC } from "react";
import {
  BottomTagWrapper,
  BottomGerenTag,
  BottomTitleTag,
  OverlayTagWrapper,
  OverlayTitleTag
} from "./WidgetStyle";
import { IStyleFrame } from "../../Modules/StyleInterfaces";

interface IProps {
  genres?: string;
  title: string;
  type?: string;
}

export const BottomTag: FC<IProps> = ({ genres, title }) => {
  return (
    <BottomTagWrapper>
      <BottomGerenTag data-testid="genre">
        {genres === undefined || genres}
      </BottomGerenTag>
      <BottomTitleTag data-testid="title">{title}</BottomTitleTag>
    </BottomTagWrapper>
  );
};

export const OverlayTag: FC<IProps> = ({ title, type }) => {
  const overlayWrapperStyle: IStyleFrame = {
    basis: {
      "padding": "0.8rem 0.8rem 1.2rem"
    }
  };

  const overlayTitleTagStyle: IStyleFrame = {
    basis: {
      "fontSize": "1.5rem"
    }
  };

  return (
    <OverlayTagWrapper {...overlayWrapperStyle}>
      <OverlayTitleTag data-testid="title" {...overlayTitleTagStyle}>
        {title}
      </OverlayTitleTag>
    </OverlayTagWrapper>
  );
};
