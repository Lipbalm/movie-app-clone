import React, { FC } from "react";
import { ITopRatedResults } from "../../Modules/Interfaces";
import { RectCard, ThumnailWrapper, ThumnailImg } from "../../Style";
import { baseImageURL } from "../../Modules/apis";

interface IProps {
  movie: ITopRatedResults;
  index: number;
}

const Card: FC<IProps> = ({ movie, index }) => {
  const {
    id,
    backdrop_path,
    genre_ids,
    adult,
    original_title,
    poster_path,
    vote_average
  } = movie;
  return (
    <RectCard isMargin={index > 0 ? true : false}>
      <ThumnailWrapper>
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no Images" />
      </ThumnailWrapper>
    </RectCard>
  );
};

export default Card;
