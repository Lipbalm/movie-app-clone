import React, { FC } from "react";
import { CarouselContainer, BodyWrapper } from "./MainStyle";
import CardWidget from "../Components/WidgetComponents/CardWidget";
import { tempCards } from "../Test/TempData/Card";
import ThemeWidget from "../Components/WidgetComponents/ThemeWidget";

const MainPage: FC = () => {
  return (
    <>
      <CarouselContainer></CarouselContainer>
      <BodyWrapper>
        {/* <CardWidget
          cards={tempCards}
          head_text="제일 많이 본 영화"
          key="card_widget_1"
          card_path={"/item"}
        ></CardWidget> */}
        <ThemeWidget></ThemeWidget>
      </BodyWrapper>
    </>
  );
};

export default MainPage;
