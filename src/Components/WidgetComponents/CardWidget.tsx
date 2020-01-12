import React, { FC } from "react";
import {
  CardWidgetWrapper,
  WidgetHead,
  WidgetLink,
  WidgetContents,
  WidgetContentsInner
} from "../../Styles/WidgetStyle";
import { ITopRatedResults } from "../../Modules/Interfaces";
import Card from "./Card";

interface IProp {
  head_text: string;
  cards: ITopRatedResults[];
}

const CardWidget: FC<IProp> = ({ head_text, cards }) => {
  return (
    <CardWidgetWrapper>
      <WidgetHead>
        {head_text}
        <WidgetLink to="/theme">더보기</WidgetLink>
      </WidgetHead>
      <WidgetContents>
        <WidgetContentsInner>
          {cards.map(
            (v, i) => (
              <Card card_info={v} index={i} key={i} />
            ),
            0
          )}
        </WidgetContentsInner>
      </WidgetContents>
    </CardWidgetWrapper>
  );
};

export default CardWidget;
