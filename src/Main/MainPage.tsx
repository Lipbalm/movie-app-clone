import React, { FC } from "react";
import { CarouselContainer, BodyWrapper } from "../Styles/MainStyle";
import CardWidget from "../Components/WidgetComponents/CardWidget";
import { tempCards } from "../Test/TempData/Card";

const MainPage: FC = () => {
  return (
    <>
      <CarouselContainer></CarouselContainer>
      <BodyWrapper>
        <CardWidget
          cards={tempCards}
          head_text="2020년 1분기 기대신작 애니"
          key="card_widget_1"
        ></CardWidget>
      </BodyWrapper>
    </>
  );
};

export default MainPage;
