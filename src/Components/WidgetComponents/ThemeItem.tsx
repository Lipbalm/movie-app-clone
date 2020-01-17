import React, { FC, useState } from "react";
import {
  ThemeItemWrapper,
  ThumnailWrapper,
  Thumnail,
  ThemeItemLayer,
  OverlayTitleTag
} from "./WidgetStyle";
import { baseImageURL } from "../../Modules/apis";
import { IStyleFrame, IStyleProperty } from "../../Modules/StyleInterfaces";
import { IImageCompnentProps } from "../../Modules/Interfaces";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

export const BigItem: FC<IImageCompnentProps> = ({ info, index, path }) => {
  const { id, title, poster_path } = info;
  const itemUrl = `${path}/${id}`;
  const history = createBrowserHistory();
  const [clicked, setClicked] = useState<boolean>(false);

  const thumnailWrapperStyle: IStyleFrame = {
    basis: {
      "width": "36.75rem",
      "height": "24rem"
    }
  };

  const thumnailStyle: IStyleFrame = {
    basis: {
      "background-image": `url('${baseImageURL}${poster_path}')`
    }
  };

  const handleClick = () => {
    setClicked(true);
    history.push(itemUrl);
  };

  return clicked ? (
    <Redirect to={itemUrl} />
  ) : (
    <ThemeItemWrapper data-testid="item" onClick={handleClick}>
      <ThumnailWrapper
        data-testid="thumnailWrapper"
        styleObj={thumnailWrapperStyle}
      >
        <Thumnail data-testid="thumnail" styleObj={thumnailStyle} />
      </ThumnailWrapper>
      <ThemeItemLayer data-testid="layer">
        <OverlayTitleTag data-testid="link">{title}</OverlayTitleTag>
      </ThemeItemLayer>
    </ThemeItemWrapper>
  );
};

export const TinyItem: FC<IImageCompnentProps> = ({ info, index, path }) => {
  const { id, title, poster_path } = info;
  const itemUrl = `${path}/${id}`;
  const history = createBrowserHistory();
  const [clicked, setClicked] = useState<boolean>(false);

  const setMargin = (index: number) => {
    let result: IStyleProperty = {};
    if (index > 0 && index < 3) {
      result = { "margin-left": "24px" };
    } else {
      if (index > 3) {
        result = { "margin-left": "24px", "margin-top": "24px" };
      } else {
        result = { "margin-top": "24px" };
      }
    }
    return result;
  };

  let themeItemWrapperStyle: IStyleFrame = {
    basis: {}
  };

  themeItemWrapperStyle.basis = Object.assign(
    themeItemWrapperStyle.basis,
    setMargin(index)
  );

  const thumnailWrapperStyle: IStyleFrame = {
    basis: {
      "width": "11.25rem",
      "height": "11.25rem"
    }
  };

  const thumnailStyle: IStyleFrame = {
    basis: {
      "background-image": `url('${baseImageURL}${poster_path}')`
    }
  };

  const handleClick = () => {
    setClicked(true);
    history.push(itemUrl);
  };

  return clicked ? (
    <Redirect to={itemUrl} />
  ) : (
    <ThemeItemWrapper
      data-testid="item"
      onClick={handleClick}
      styleObj={themeItemWrapperStyle}
    >
      <ThumnailWrapper
        data-testid="thumnailWrapper"
        styleObj={thumnailWrapperStyle}
      >
        <Thumnail data-testid="thumnail" styleObj={thumnailStyle} />
      </ThumnailWrapper>
      <ThemeItemLayer data-testid="layer">
        <OverlayTitleTag data-testid="link">{title}</OverlayTitleTag>
      </ThemeItemLayer>
    </ThemeItemWrapper>
  );
};
