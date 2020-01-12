import React, { FC } from "react";
import { changeGenreIdToName } from "../../Modules/utils";
import {
  CardLabelContainer,
  GerenTag,
  TitleTag
} from "../../Styles/WidgetStyle";

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
