import React from "react";
import { tempCard } from "../../Test/TempData/Card";
import {
  WidgetHead,
  WidgetLink,
  Separater,
  Segment,
  WidgetContentsInner,
  WidgetContentsColumn,
  WidgetWrapper
} from "./WidgetStyle";
import { BigItem, TinyItem } from "./ThemeItem";
import { IStyleFrame } from "../../Modules/StyleInterfaces";

const ThemeWidget = () => {
  const widgetContentsColumnStyle: IStyleFrame = {
    basis: {
      "margin": "0 0 0 24px"
    }
  };
  return (
    <WidgetWrapper>
      <WidgetHead>
        제일 잘팔리는 영화
        <WidgetLink to="/item">더보기</WidgetLink>
      </WidgetHead>

      <Separater>
        <Segment />
      </Separater>
      <WidgetContentsInner>
        <WidgetContentsColumn>
          <BigItem info={tempCard} index={0} path={"/item"} />
        </WidgetContentsColumn>
        <WidgetContentsColumn styleObj={widgetContentsColumnStyle}>
          <TinyItem info={tempCard} index={0} path={"/item"} />
          <TinyItem info={tempCard} index={0} path={"/item"} />
          <TinyItem info={tempCard} index={0} path={"/item"} />
          <TinyItem info={tempCard} index={0} path={"/item"} />
          <TinyItem info={tempCard} index={0} path={"/item"} />
        </WidgetContentsColumn>
      </WidgetContentsInner>
    </WidgetWrapper>
  );
};

export default ThemeWidget;
