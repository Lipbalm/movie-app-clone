import React, { FC } from "react";
import {
  BottomTagContainer,
  BottomGerenTag,
  BottomTitleTag,
  OverlayTagContainer,
  OverlayTitleTag
} from "./WidgetStyle";
import { IStyleProps } from "../../Modules/Interfaces";

interface IProps {
  genres?: string;
  title: string;
  type?: string;
}

export const BottomTag: FC<IProps> = ({ genres, title }) => {
  return (
    <BottomTagContainer>
      <BottomGerenTag data-testid="genre">
        {genres === undefined || genres}
      </BottomGerenTag>
      <BottomTitleTag data-testid="title">{title}</BottomTitleTag>
    </BottomTagContainer>
  );
};

export const OverlayTag: FC<IProps> = ({ title, type }) => {
  let style: IStyleProps;
  style =
    type === "lg"
      ? {
          padding: "0.8rem 0.8rem 1.2rem",
          fontSize: "1.5rem"
        }
      : {
          padding: "0.5rem 0.5rem 0.7rem",
          fontSize: "0.875rem"
        };
  return (
    <OverlayTagContainer padding={style.padding} width={"inherit"}>
      <OverlayTitleTag data-testid="title" fontSize={style.fontSize}>
        {title}
      </OverlayTitleTag>
    </OverlayTagContainer>
  );
};
