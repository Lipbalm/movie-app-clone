import React, { FC } from "react";
import { CarouselContainer, BodyWrapper } from "./MainStyle";
import CardWidget from "../Components/WidgetComponents/CardWidget";
import { tempCard, tempCards } from "../Test/TempData/Card";
import ThemeWidget from "../Components/WidgetComponents/ThemeWidget";

const MainPage: FC = () => {
  return (
    <>
      <CarouselContainer></CarouselContainer>
      <BodyWrapper>
        <CardWidget
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
        ></ThemeWidget>
      </BodyWrapper>
    </>
  );
};

export default MainPage;
