import React, { FC, useState, useRef } from "react";
import {
  ThemeItemWrapper,
  ThumnailWrapper,
  Thumnail,
  ThemeItemLayer,
  ItemTitle
} from "./WidgetStyle";
import { imageBaseURL } from "../../Modules/apis";
import { IStyleFrame, IStyleProperty } from "../../Modules/StyleInterfaces";
import { IImageCompnentProps } from "../../Modules/Interfaces";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { cloneObject } from "../../Modules/utils";

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
      "background-image": `url('${imageBaseURL}${poster_path}')`,
      "background-size": "36.75rem 24rem"
    }
  };

  const itemTitleStyle: IStyleFrame = {
    basis: {
      "color": "#fff",
      "padding": "0.5rem",
      "font-size": "1.5rem",
      "font-weight": "800"
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
        <ThemeItemLayer data-testid="layer">
          <ItemTitle styleObj={itemTitleStyle}>{title}</ItemTitle>
        </ThemeItemLayer>
      </ThumnailWrapper>
    </ThemeItemWrapper>
  );
};

export const TinyItem: FC<IImageCompnentProps> = ({ info, index, path }) => {
  const { id, title, poster_path } = info;
  const itemUrl = `${path}/${id}`;
  const history = createBrowserHistory();
  const [clicked, setClicked] = useState<boolean>(false);

  let themeItemWrapperStyle: IStyleFrame = { basis: {} };

  const setMargin = (index: number) => {
    let result: IStyleProperty = {};
    if (index > 0 && index < 3) {
      result = { "margin-left": "24px" };
    } else {
      if (index > 3) {
        result = { "margin-left": "24px", "margin-top": "24px" };
      }
      if (index === 3) {
        result = { "margin-top": "24px" };
      }
    }
    return { ...result };
  };

  themeItemWrapperStyle.basis = cloneObject(setMargin(index));

  const thumnailWrapperStyle: IStyleFrame = {
    basis: {
      "width": "11.25rem",
      "height": "11.25rem"
    }
  };

  const thumnailStyle: IStyleFrame = {
    basis: {
      "background-image": `url('${imageBaseURL}${poster_path}')`,
      "background-size": "11.25rem 11.25rem"
    }
  };

  const itemTitleStyle: IStyleFrame = {
    basis: {
      "color": "#fff",
      "padding": "0.5rem",
      "font-size": "0.875",
      "font-weight": "300"
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
      <ThemeItemLayer data-testid="layer" >
        <ItemTitle styleObj={itemTitleStyle}>{title}</ItemTitle>
      </ThemeItemLayer>
    </ThemeItemWrapper>
  );
};
