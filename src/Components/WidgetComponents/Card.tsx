import React, { FC, useState } from "react";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  RectCardLg,
  RectCardMd,
  RectCardSm,
  CardThumnailWrapper,
  ThumnailImg,
  ThumnailWrapper
} from "./WidgetStyle";
import { baseImageURL } from "../../Modules/apis";
import { BottomTag, OverlayTag } from "./CardTag";
import { ICardProps } from "../../Modules/Interfaces";

const history = createBrowserHistory();

export const CardMd: FC<ICardProps> = ({ card_info, index, card_path }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { id, genre_ids, title, poster_path } = card_info;

  const genres = genre_ids.join("/");
  const handleClick = () => {
    setClicked(true);
    history.push(card_path);
  };

  return clicked ? (
    <Redirect to={card_path} />
  ) : (
    <RectCardMd key={id} data-testid="card" onClick={handleClick}>
      <CardThumnailWrapper>
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
      </CardThumnailWrapper>
      <BottomTag genres={genres} title={title} />
    </RectCardMd>
  );
};

export const CardLg: FC<ICardProps> = ({ card_info, index, card_path }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { id, title, poster_path } = card_info;

  const handleClick = () => {
    setClicked(true);
    history.push(card_path);
  };

  return clicked ? (
    <Redirect to={card_path} />
  ) : (
    <RectCardLg key={id} data-testid="card" onClick={handleClick}>
      <ThumnailWrapper>
        <OverlayTag title={title} type="lg" />
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
      </ThumnailWrapper>
    </RectCardLg>
  );
};

export const CardSm: FC<ICardProps> = ({ card_info, index, card_path }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { id, title, poster_path } = card_info;

  const handleClick = () => {
    setClicked(true);
    history.push(card_path);
  };

  return clicked ? (
    <Redirect to={card_path} />
  ) : (
    <RectCardSm key={id} data-testid="card" onClick={handleClick}>
      <ThumnailWrapper>
        <OverlayTag title={title} type="sm" />
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
      </ThumnailWrapper>
    </RectCardSm>
  );
};
