import React, { FC, useEffect, useState } from "react";
import { RouterHomeContainer, CarouselContainer, BodyWrapper } from "../Style";
import { getGenreIds } from "../Modules/apis";
import CardWidget from "../Components/WidgetComponents/CardWidget";
import Loader from "../Components/UtilComponents/Loader";

const Body: FC = () => {
  const [load, setLoad] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getGenreIds("en-US");
      } catch (e) {
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  return load ? (
    <Loader />
  ) : (
    <RouterHomeContainer>
      <CarouselContainer></CarouselContainer>
      <BodyWrapper>
        <CardWidget key="CardWidget1"></CardWidget>
        {/* <CardWidget key="CardWidget2"></CardWidget>
        <CardWidget key="CardWidget3"></CardWidget> */}
      </BodyWrapper>
    </RouterHomeContainer>
  );
};

export default Body;
