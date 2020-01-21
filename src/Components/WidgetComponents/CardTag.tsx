import React, { FC } from "react";
import { BottomTagWrapper, BottomGerenTag, ItemTitle } from "./WidgetStyle";
import { IStyleFrame } from "../../Modules/StyleInterfaces";

interface IProps {
  genres?: string;
  title: string;
  type?: string;
}

const itemTitleStyle: IStyleFrame = {
  basis: {
    "font-size": "1.15rem",
    "font-weight": "600",
    "color": "black"
  }
};

export const BottomTag: FC<IProps> = ({ genres, title }) => {
  return (
    <BottomTagWrapper>
      <BottomGerenTag data-testid="genre">
        {genres === undefined || genres}
      </BottomGerenTag>
      <ItemTitle data-testid="title" styleObj={itemTitleStyle}>
        {title}
      </ItemTitle>
    </BottomTagWrapper>
  );
};
