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
import { Card } from "./Card";
import { IWidgetProps } from "../../Modules/Interfaces";

const CardWidget: FC<IWidgetProps> = ({
  head_text,
  info_list,
  head_link_path,
  item_path
}) => {
  return (
    <WidgetWrapper>
      <WidgetHead>
        {head_text}
        <WidgetLink to={head_link_path}>더보기</WidgetLink>
      </WidgetHead>

      <Separater>
        <Segment />
      </Separater>

      <WidgetContents>
        <WidgetContentsInner>
          {info_list.map(
            (v, i) => (
              <Card info={v} index={i} key={i} path={`${item_path}/${v.id}`} />
            ),
            0
          )}
        </WidgetContentsInner>
      </WidgetContents>
    </WidgetWrapper>
  );
};

export default CardWidget;
