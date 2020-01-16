import React from "react";
import { tempCard } from "../../Test/TempData/Card";
import {
  WidgetHead,
  WidgetLink,
  Separater,
  Segment,
  WidgetWrapper
} from "./WidgetStyle";
import { BigItem } from "./ThemeItem";
const ThemeWidget = () => {
  return (
    <WidgetWrapper>
      <WidgetHead>
        제일 잘팔리는 영화
        <WidgetLink to="/item">더보기</WidgetLink>
      </WidgetHead>

      <Separater>
        <Segment />
      </Separater>
      <BigItem></BigItem>
    </WidgetWrapper>
  );
};

export default ThemeWidget;
