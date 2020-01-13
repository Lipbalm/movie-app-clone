import React, { FC } from "react";
import { CardLabelContainer, GerenTag, TitleTag } from "./WidgetStyle";

interface IProps {
  genre_ids: number[];
  title: string;
}

const CardLabel: FC<IProps> = ({ genre_ids, title }) => {
  return (
    <CardLabelContainer>
      <GerenTag data-testid="genre">{genre_ids.join("/")}</GerenTag>
      <TitleTag data-testid="title">{title}</TitleTag>
    </CardLabelContainer>
  );
};

export default CardLabel;
