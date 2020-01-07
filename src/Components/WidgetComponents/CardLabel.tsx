import React, { FC } from "react";
import { changeGenreIdToName } from "../../Modules/utils";

interface IProps {
  genre_ids: number[];
  title: string;
}

const CardLabel: FC<IProps> = ({ genre_ids, title }) => {
  return (
    <div>
      <div data-testid="genre">{changeGenreIdToName(genre_ids)}</div>
      <div data-testid="name">{title}</div>
    </div>
  );
};

export default CardLabel;
