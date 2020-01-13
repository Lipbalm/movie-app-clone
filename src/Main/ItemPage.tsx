import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { IMatchParams } from "../Modules/Interfaces";
import { BodyWrapper } from "./MainStyle";

const ItemPage: FC<RouteComponentProps<IMatchParams>> = ({ match }) => {
  const { id } = match.params;
  return <BodyWrapper>ItemPage : {id}</BodyWrapper>;
};

export default ItemPage;
