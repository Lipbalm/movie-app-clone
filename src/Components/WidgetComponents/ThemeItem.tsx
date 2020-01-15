import React, { FC } from "react";
import {
  ThemeItemWrapper,
  ThumnailWrapper,
  Thumnail,
  ThemeItemLayer,
  OverlayTitleTag
} from "./WidgetStyle";

export const BigItem: FC = () => {
  return (
    <ThemeItemWrapper margin={"0 0 0 0"}>
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
