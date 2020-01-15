import React, { FC } from "react";
import {
  ThemeItemWrapper,
  ThumnailWrapper,
  Thumnail,
  ThemeItemLayer,
  OverlayTitleTag,
  IStyleFrame
} from "./WidgetStyle";

export const BigItem: FC = () => {
  const itemWrapperStyle: IStyleFrame = {
    basis: {
      margin: "0 0 0 0"
    },
    pesudo: {}
  };
  return (
    <ThemeItemWrapper {...itemWrapperStyle}>
      <ThumnailWrapper width={"36.75rem"} height={"24rem"}>
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

Object.entries({ width: "100px", height: "100px" }).reduce((a, c) => {
  return (a += `${c[0]}: ${c[1]};`);
}, ``);
