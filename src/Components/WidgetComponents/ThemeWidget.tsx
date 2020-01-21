import React, { FC, useRef } from "react";
import {
  WidgetHead,
  WidgetLink,
  Separater,
  Segment,
  WidgetContents,
  WidgetContentsColumn,
  WidgetWrapper,
  Description,
  Text
} from "./WidgetStyle";
import { BigItem, TinyItem } from "./ThemeItem";
import { IStyleFrame } from "../../Modules/StyleInterfaces";
import { IThemeWidgetProps } from "../../Modules/Interfaces";

const ThemeWidget: FC<IThemeWidgetProps> = ({
  head_text,
  info_list,
  big_item_info,
  head_link_path,
  item_path,
  desc_tesx
}) => {
  const leftColumnStyle: IStyleFrame = {
    basis: {
      "margin": "0 0 0 24px"
    }
  };

  return (
    <WidgetWrapper>
      <Separater>
        <Segment />
      </Separater>

      <WidgetHead>
        {head_text}
        <WidgetLink to={head_link_path}>더보기</WidgetLink>
      </WidgetHead>
      <Description>
        <Text>{desc_tesx}</Text>
      </Description>
      <WidgetContents>
        <WidgetContentsColumn>
          <BigItem
            info={big_item_info}
            index={big_item_info.id}
            path={`${item_path}${big_item_info.id}`}
          />
        </WidgetContentsColumn>
        <WidgetContentsColumn styleObj={leftColumnStyle}>
          {info_list.map((v, i) => {
            return (
              <TinyItem
                info={v}
                index={i}
                path={`${item_path}${v.id}`}
                key={v.id}
              />
            );
          })}
        </WidgetContentsColumn>
      </WidgetContents>
    </WidgetWrapper>
  );
};

export default ThemeWidget;
