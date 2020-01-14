import React from "react";
import { CardLg, CardMd, CardSm } from "./Card";
import { tempCard } from "../../Test/TempData/Card";
import {
  WidgetHead,
  WidgetLink,
  Separater,
  Segment,
  WidgetWrapper,
  WidgetContentsInner,
  WidgetContents
} from "./WidgetStyle";
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
      <WidgetContents>
        <WidgetContentsInner>
          <CardLg card_info={tempCard} index={0} card_path={"/item"} />
        </WidgetContentsInner>
        <WidgetContentsInner>
          <CardSm card_info={tempCard} index={0} card_path={"/item"} />
          <CardSm card_info={tempCard} index={0} card_path={"/item"} />
          <CardSm card_info={tempCard} index={0} card_path={"/item"} />
          <CardSm card_info={tempCard} index={0} card_path={"/item"} />
          <CardSm card_info={tempCard} index={0} card_path={"/item"} />
          <CardSm card_info={tempCard} index={0} card_path={"/item"} />
        </WidgetContentsInner>
      </WidgetContents>
    </WidgetWrapper>
  );
};

export default ThemeWidget;
