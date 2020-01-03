import React, { FC } from "react";

interface IProps {
  genre_id: number;
  name: string;
}

const CardLabel: FC<IProps> = ({ genre_id, name }) => {
  const changeGenre = () => (genre_id === 13 ? "SF" : "unknown");
  return (
    <div>
      <div data-testid="genre">{changeGenre()}</div>
      <div data-testid="name">{name}</div>
    </div>
  );
};

export default CardLabel;
