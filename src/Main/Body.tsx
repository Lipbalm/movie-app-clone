import React, { FC, useEffect } from "react";
import { RouterHomeContainer, CarouselContainer, BodyWrapper } from "../Style";
import { getGenreIds } from "../Modules/apis";
import CardWidget from "../Components/WidgetComponents/CardWidget";

const Body: FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      await getGenreIds("en-US");
    };
    fetchData();
  }, []);

  return (
    <RouterHomeContainer>
      <CarouselContainer></CarouselContainer>
      <BodyWrapper>
        <CardWidget key="CardWidget1"></CardWidget>
        <CardWidget key="CardWidget2"></CardWidget>
        <CardWidget key="CardWidget3"></CardWidget>
      </BodyWrapper>
    </RouterHomeContainer>
  );
};

export default Body;
