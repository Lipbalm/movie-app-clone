import React, { FC, useState } from "react";
import { ITopRatedResults } from "../../Modules/Interfaces";
import {
  RectCard,
  ThumnailWrapper,
  ThumnailImg
} from "../../Styles/WidgetStyle";
import { baseImageURL } from "../../Modules/apis";
import CardLabel from "./CardLabel";

interface IProps {
  card_info: ITopRatedResults;
  index: number;
}

const Card: FC<IProps> = ({ card_info, index }) => {
  const { id, genre_ids, title, poster_path } = card_info;

  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    setValue("Clicked");
  };

  return (
    <RectCard
      isMargin={index > 0 ? true : false}
      data-testid="card"
      onClick={handleClick}
    >
      <ThumnailWrapper>
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
      </ThumnailWrapper>
      <CardLabel genre_ids={genre_ids} title={title} />
    </RectCard>
  );
};

export default Card;
