import React, { FC, useEffect, useState } from "react";
import {
  CardWidgetWrapper,
  WidgetHead,
  WidgetLink,
  WidgetContents,
  WidgetContentsInner,
  WidgetWarn
} from "../../Style";
import { getTopRatedMovie } from "../../Modules/apis";
import { ITopRatedResults } from "../../Modules/Interfaces";
import Card from "./Card";

const CardWidget: FC = () => {
  const [movies, setMovies] = useState<ITopRatedResults[] | null>(null);
  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const ADJUST_COUNT: number = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getTopRatedMovie("kr-KO", 1);
        setMovies(movies.results.slice(0, ADJUST_COUNT));
      } catch (e) {
        setError("데이터를 불러올 수 없습니다. : " + e);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  return (
    <CardWidgetWrapper>
      <WidgetHead>
        <h2>Theme1</h2>
        <WidgetLink to="/widgetTest">더보기</WidgetLink>
      </WidgetHead>

      <WidgetContents>
        <WidgetContentsInner>
          {load ? null : error !== null ? (
            <WidgetWarn>{error}</WidgetWarn>
          ) : (
            movies !== null &&
            movies.map((movie, index) => (
              <Card key={index} movie={movie} index={index} />
            ))
          )}
        </WidgetContentsInner>
      </WidgetContents>
    </CardWidgetWrapper>
  );
};

export default CardWidget;
