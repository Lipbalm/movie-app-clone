import React, { FC } from "react";
import {
  WidgetWrapper,
  WidgetHead,
  WidgetLink,
  WidgetContents,
  WidgetContentsInner,
  Separater,
  Segment
} from "./WidgetStyle";
import { ITopRatedResults } from "../../Modules/Interfaces";
import { CardMd } from "./Card";

interface IProp {
  head_text: string;
  cards: ITopRatedResults[];
  card_path: string;
}

const CardWidget: FC<IProp> = ({ head_text, cards, card_path }) => {
  return (
    <WidgetWrapper>
      <WidgetHead>
        {head_text}
        <WidgetLink to="/theme">더보기</WidgetLink>
      </WidgetHead>

      <Separater>
        <Segment />
      </Separater>

      <WidgetContents>
        <WidgetContentsInner>
          {cards.map(
            (v, i) => (
              <CardMd
                card_info={v}
                index={i}
                key={i}
                card_path={`${card_path}/${v.id}`}
              />
            ),
            0
          )}
        </WidgetContentsInner>
      </WidgetContents>
    </WidgetWrapper>
  );
};

export default CardWidget;
