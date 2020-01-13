import React from "react";
import {
  HeaderList,
  HeaderItem,
  HeaderLinkWrapper,
  HeaderLink
} from "./LinkStyle";

export default (): JSX.Element => {
  return (
    <HeaderLinkWrapper>
      <HeaderList>
        <HeaderItem isMargin={false}>
          <HeaderLink to="/theme1">theme1</HeaderLink>
        </HeaderItem>
        <HeaderItem isMargin={true}>
          <HeaderLink to="/theme2">theme2</HeaderLink>
        </HeaderItem>
        <HeaderItem isMargin={true}>
          <HeaderLink to="/theme3">theme3</HeaderLink>
        </HeaderItem>
      </HeaderList>
    </HeaderLinkWrapper>
  );
};
