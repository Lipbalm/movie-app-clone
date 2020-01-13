import React, { FC, useState } from "react";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  RectCardLg,
  RectCardMd,
  RectCardSm,
  CardThumnailWrapper,
  ThumnailImg
} from "./WidgetStyle";
import { baseImageURL } from "../../Modules/apis";
import CardLabel from "./CardLabel";
import { ICardProps } from "../../Modules/Interfaces";

const history = createBrowserHistory();

export const CardMd: FC<ICardProps> = ({ card_info, index, card_path }) => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const { id, genre_ids, title, poster_path } = card_info;

  const handleClick = () => {
    setRedirect(true);
    history.push(card_path);
  };

  return redirect ? (
    <Redirect to={card_path} />
  ) : (
    <RectCardMd key={id} data-testid="card" onClick={handleClick}>
      <CardThumnailWrapper>
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
      </CardThumnailWrapper>
      <CardLabel genre_ids={genre_ids} title={title} />
    </RectCardMd>
  );
};

export const CardLg: FC<ICardProps> = ({ card_info, index, card_path }) => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const { id, title, poster_path } = card_info;

  const handleClick = () => {
    setRedirect(true);
    history.push(card_path);
  };

  return redirect ? (
    <Redirect to={card_path} />
  ) : (
    <RectCardLg key={id} data-testid="card" onClick={handleClick}>
      <CardThumnailWrapper>
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
      </CardThumnailWrapper>
    </RectCardLg>
  );
};

export const CardSm: FC<ICardProps> = ({ card_info, index, card_path }) => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const { id, title, poster_path } = card_info;

  const handleClick = () => {
    setRedirect(true);
    history.push(card_path);
  };

  return redirect ? (
    <Redirect to={card_path} />
  ) : (
    <RectCardSm key={id} data-testid="card" onClick={handleClick}>
      <CardThumnailWrapper>
        <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
      </CardThumnailWrapper>
    </RectCardSm>
  );
};
