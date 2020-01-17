import React, { FC, useState } from "react";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { RectCard, ThumnailWrapper, Thumnail } from "./WidgetStyle";
import { baseImageURL } from "../../Modules/apis";
import { BottomTag, OverlayTag } from "./CardTag";
import { IImageCompnentProps } from "../../Modules/Interfaces";
import { IStyleFrame } from "../../Modules/StyleInterfaces";

const history = createBrowserHistory();

export const CardMd: FC<IImageCompnentProps> = ({ info, index, path }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { id, genre_ids, title, poster_path } = info;
  const genres = genre_ids.join("/");

  const handleClick = () => {
    setClicked(true);
    history.push(path);
  };

  const thumnailWrapperStyle: IStyleFrame = {
    basis: {
      "width": "13.75rem"
    }
  };

  return clicked ? (
    <Redirect to={path} />
  ) : (
    <RectCard key={id} data-testid="card" onClick={handleClick}>
      <ThumnailWrapper {...thumnailWrapperStyle}>
        {/* <Thumnail src={`${baseImageURL}${poster_path}`} alt="no image" /> */}
      </ThumnailWrapper>
      <BottomTag genres={genres} title={title} />
    </RectCard>
  );
};

// export const CardLg: FC<ICardProps> = ({ card_info, index, card_path }) => {
//   const [clicked, setClicked] = useState<boolean>(false);
//   const { id, title, poster_path } = card_info;

//   const handleClick = () => {
//     setClicked(true);
//     history.push(card_path);
//   };

//   return clicked ? (
//     <Redirect to={card_path} />
//   ) : (
//     <RectCardLg key={id} data-testid="card" onClick={handleClick}>
//       <ThumnailWrapper>
//         <OverlayTag title={title} type="lg" />
//         <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
//       </ThumnailWrapper>
//     </RectCardLg>
//   );
// };

// export const CardSm: FC<ICardProps> = ({ card_info, index, card_path }) => {
//   const [clicked, setClicked] = useState<boolean>(false);
//   const { id, title, poster_path } = card_info;

//   const handleClick = () => {
//     setClicked(true);
//     history.push(card_path);
//   };

//   return clicked ? (
//     <Redirect to={card_path} />
//   ) : (
//     <RectCardSm key={id} data-testid="card" onClick={handleClick}>
//       <ThumnailWrapper>
//         <OverlayTag title={title} type="sm" />
//         <ThumnailImg src={`${baseImageURL}${poster_path}`} alt="no image" />
//       </ThumnailWrapper>
//     </RectCardSm>
//   );
// };
