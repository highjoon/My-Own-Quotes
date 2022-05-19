import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 0;
`;

export const ButtonConatiner = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #777c91;
  margin-bottom: 2rem;
`;

export const SortButton = styled.button`
  font: inherit;
  color: #272c52;
  border: 1px solid #272c52;
  background-color: transparent;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #4c59cc;
    border: 1px solid #4c59cc;
    color: #ffffff;
  }
`;
