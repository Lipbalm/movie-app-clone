import React, { FC } from "react";
import { CarouselContainer, BodyWrapper } from "./MainStyle";
import CardWidget from "../Components/WidgetComponents/CardWidget";
import { tempCard, tempCards } from "../Test/TempData/Card";
import ThemeWidget from "../Components/WidgetComponents/ThemeWidget";
import VideoList from "../Components/ListComponents/VideoList";
import VideoItem from "../Components/ListComponents/VideoItem";
import { VideoItemData, VideoListData } from "../Test/TempData/BreakingBad";

const MainPage: FC = () => {
  return (
    <>
      <CarouselContainer></CarouselContainer>
      <BodyWrapper>
        {/* <CardWidget
          key="card_widget_1"
          info_list={tempCards}
          head_text="제일 많이 본 영화"
          head_link_path={"/item"}
          item_path={"/item"}
        ></CardWidget>
        <ThemeWidget
          key="theme_widget_2"
          big_item_info={tempCard}
          info_list={tempCards}
          head_text="제일 많이 본 영화"
          head_link_path={"/itme"}
          item_path={"/itme"}
          desc_tesx={
            "안 본 사람은 있을 지언정 못 들어본 사람은 없는 영화! 들어만 봤다면 이번 기회에 콜?"
          }
        ></ThemeWidget> */}
        <VideoList {...VideoListData()} />
        <VideoItem {...VideoItemData} />
      </BodyWrapper>
    </>
  );
};

export default MainPage;
