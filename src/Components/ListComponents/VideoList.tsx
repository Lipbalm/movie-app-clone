import React, { FC } from "react";
import { IListProps, IVideoProps } from "../../Modules/Interfaces";
import VideoItem from "./VideoItem";
const VideoList: FC<IListProps<IVideoProps>> = ({ items }) => {
  return (
    <div>
      {items.map(item => {
        const { episode_id } = item;
        return <VideoItem key={episode_id} {...item} />;
      }, [])}
    </div>
  );
};

export default VideoList;
