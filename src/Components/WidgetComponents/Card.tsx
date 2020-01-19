import React, { FC, useState } from "react";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { RectCard, ThumnailWrapper, Thumnail } from "./WidgetStyle";
import { imageBaseURL } from "../../Modules/apis";
import { BottomTag, OverlayTag } from "./CardTag";
import { IImageCompnentProps } from "../../Modules/Interfaces";
import { IStyleFrame } from "../../Modules/StyleInterfaces";

const history = createBrowserHistory();

export const Card: FC<IImageCompnentProps> = ({ info, index, path }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { id, genre_ids, title, poster_path } = info;
  const genres = genre_ids.join("/");

  const handleClick = () => {
    setClicked(true);
    history.push(path);
  };

  const thumnailWrapperStyle: IStyleFrame = {
    basis: {
      "width": "13.75rem",
      "height": "17.625rem"
    }
  };

  const thumnailStyle: IStyleFrame = {
    basis: {
      "background-image": `url('${imageBaseURL}${poster_path}')`
    }
  };

  return clicked ? (
    <Redirect to={path} />
  ) : (
    <RectCard key={id} data-testid="card" onClick={handleClick}>
      <ThumnailWrapper styleObj={thumnailWrapperStyle}>
        <Thumnail styleObj={thumnailStyle} />
      </ThumnailWrapper>
      <BottomTag genres={genres} title={title} />
    </RectCard>
  );
};
