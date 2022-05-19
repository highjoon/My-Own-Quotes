import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272c52;
`;

export const Nav = styled.nav`
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & li {
    margin: auto 1.5rem;
    font-size: 1.4rem;
    text-align: center;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
  }

  & a {
    text-decoration: none;
    color: #777c91;

    &:hover,
    &:active,
    &.selected {
      color: #ffffff;
    }
  }
`;
