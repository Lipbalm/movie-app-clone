import React, { FC, useState } from "react";
import { ITopRatedResults } from "../../Modules/Interfaces";
import { RectCard, ThumnailWrapper, ThumnailImg } from "../../Style";
import { baseImageURL } from "../../Modules/apis";
import CardLabel from "./CardLabel";

interface IProps {
  movie: ITopRatedResults;
  index: number;
}

const Card: FC<IProps> = ({ movie, index }) => {
  const { id, genre_ids, title, poster_path } = movie;

  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    setValue("Clicked");
  };

  return (
    <RectCard
      isMargin={index > 0 ? true : false}
      data-testid="margin-test"
      onClick={handleClick}
    >
      {value}
      <ThumnailWrapper>
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
        <CardLabel genre_ids={genre_ids} title={title} />
      </ThumnailWrapper>
    </RectCard>
  );
};

export default Card;
