import styled from "@emotion/styled";

export const Item = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #6a77af;

  & figure {
    margin: 0;
    padding: 0;
    width: 70%;
  }

  & blockquote {
    margin: 0;
    text-align: left;
    font-size: 1.5rem;
    color: #ffffff;
  }

  & p {
    margin: 0;
    margin-bottom: 0.25rem;
  }

  & figcaption {
    font-style: italic;
    color: #ffffff;
  }

  &:last-of-type {
    border-bottom: none;
  }

  & .btn {
    text-decoration: none;
    background-color: #3642aa;
    color: white;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    border: 1px solid #3642aa;
    cursor: pointer;

    &:hover {
      background-color: #4550b1;
      border: 1px solid #4550b1;
    }
  }
`;
