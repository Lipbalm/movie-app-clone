import React, { FC } from "react";
import { IVideoProps } from "../../Modules/Interfaces";
import {
  ItemWrapper,
  ImageWrapper,
  StillImage,
  ItemInfo,
  InfoTop,
  InfoMid,
  InfoBot,
  ItemDate,
  ItemTitle
} from "./ListStyle";
import { imageBaseURL } from "../../Modules/apis";

const VideoItem: FC<IVideoProps> = ({
  episode_id,
  episode_number,
  title,
  air_date,
  image_path,
  overview
}) => {
  return (
    <ItemWrapper>
      <ImageWrapper>
        <StillImage src={`${imageBaseURL}${image_path}`}></StillImage>
      </ImageWrapper>
      <ItemInfo>
        <InfoTop>
          <ItemTitle to="">{`${episode_number}. ${title}`}</ItemTitle>
          <ItemDate>{air_date}</ItemDate>
        </InfoTop>
        <InfoMid>{overview}</InfoMid>
        <InfoBot></InfoBot>
      </ItemInfo>
    </ItemWrapper>
  );
};

export default VideoItem;
