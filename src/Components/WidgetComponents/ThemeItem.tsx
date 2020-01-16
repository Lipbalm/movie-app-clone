import React, { FC } from "react";
import {
  ThemeItemWrapper,
  ThumnailWrapper,
  Thumnail,
  ThemeItemLayer,
  OverlayTitleTag
} from "./WidgetStyle";
import { IStyleFrame } from "../../Modules/StyleInterfaces";

export const BigItem: FC = () => {
  const themeItemWrapperStyle: IStyleFrame = {
    basis: {
      "margin": "0 0 0 24px"
    },
    pesudo: {}
  };

  const thumnailWrapperStyle: IStyleFrame = {
    basis: {
      "width": "36.75rem",
      "height": "24rem"
    }
  };

  return (
    <ThemeItemWrapper {...themeItemWrapperStyle}>
      <ThumnailWrapper {...thumnailWrapperStyle}>
        <Thumnail />
      </ThumnailWrapper>
      <ThemeItemLayer>
        <OverlayTitleTag />
      </ThemeItemLayer>
    </ThemeItemWrapper>
  );
};

export const TinyItem: FC = () => {
  return <></>;
};
