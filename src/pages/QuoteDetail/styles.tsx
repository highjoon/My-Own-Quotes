import styled from "@emotion/styled";

export const NoQuoteFound = styled.p`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 40rem;
  padding: 1rem;
  margin: 1rem auto;
  border: none;
  border-radius: 6px;
  font-style: italic;
  font-size: 1.5rem;
  background-color: #272c52;
  color: #777c91;
  cursor: pointer;

  &:hover,
  &:active {
    color: #ffffff;
  }
`;
