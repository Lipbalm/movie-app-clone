import React from "react";
import {
  HeaderList,
  HeaderItem,
  HeaderLinkWrapper,
  HeaderLink
} from "../../Style";

export default (): JSX.Element => {
  return (
    <HeaderLinkWrapper>
      <HeaderList>
        <HeaderItem>
          <HeaderLink to="/theme1">theme1</HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink to="/theme2">theme2</HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink to="/theme3">theme3</HeaderLink>
        </HeaderItem>
      </HeaderList>
    </HeaderLinkWrapper>
  );
};
