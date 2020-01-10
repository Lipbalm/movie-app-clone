import React, { FC } from "react";
import {
  CardWidgetWrapper,
  WidgetHead,
  WidgetLink
} from "../../Styles/WidgetStyle";
import { ITopRatedResults } from "../../Modules/Interfaces";

interface IProp {
  head_text: string;
  cards: ITopRatedResults[];
}

const CardWidget: FC<IProp> = ({ head_text }) => {
  return (
    <CardWidgetWrapper>
      <WidgetHead>
        {head_text}
        <WidgetLink to="/theme">더보기</WidgetLink>
      </WidgetHead>
    </CardWidgetWrapper>
  );
};

export default CardWidget;
