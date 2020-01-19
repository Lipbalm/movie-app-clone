import React, { FC } from "react";
import { tempCard, tempCards } from "../../Test/TempData/Card";
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
import { IItemWidgetProps } from "../../Modules/Interfaces";

const ThemeWidget: FC<IItemWidgetProps> = ({
  head_text,
  info_list,
  big_item_info,
  head_link_path,
  item_path
}) => {
  const leftColumnStyle: IStyleFrame = {
    basis: {
      "margin": "0 0 0 24px"
    }
  };

  return (
    <WidgetWrapper>
      <WidgetHead>
        {head_text}
        <WidgetLink to={head_link_path}>더보기</WidgetLink>
      </WidgetHead>

      <Separater>
        <Segment />
      </Separater>
      <WidgetContentsInner>
        <WidgetContentsColumn>
          <BigItem
            info={big_item_info}
            index={0}
            path={`${item_path}${big_item_info.id}`}
          />
        </WidgetContentsColumn>
        <WidgetContentsColumn styleObj={leftColumnStyle}>
          {info_list.map((v, i) => {
            return <TinyItem info={v} index={i} path={`${item_path}${v.id}`} />;
          })}
        </WidgetContentsColumn>
      </WidgetContentsInner>
    </WidgetWrapper>
  );
};

export default ThemeWidget;
