import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderLinkWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  width: 1200px;
  margin: 0px auto;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  height: 5rem;
`;

const HeaderList = styled.div`
  display: flex;
`;

const HeaderItem = styled.div`
  margin-left: 20px;
`;

const HeaderLink = styled(Link)`
  font-weight: 800;
  color: black;
  :hover {
    color: green;
  }
`;

export { HeaderLinkWrapper, HeaderList, HeaderItem, HeaderLink };
