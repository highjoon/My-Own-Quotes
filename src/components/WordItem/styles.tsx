import styled from "@emotion/styled";

export const Item = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #777c91;

  & figure {
    margin: 0;
    padding: 0;
    width: 70%;
  }

  & blockquote {
    margin: 0;
    text-align: left;
    font-size: 1.5rem;
    color: #fff;
  }

  & p {
    margin: 0;
    margin-bottom: 0.25rem;
  }

  & figcaption {
    font-style: italic;
    color: #fff;
  }

  &:last-of-type {
    border-bottom: none;
  }

  & .btn {
    text-decoration: none;
    background-color: #4c59cc;
    color: white;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    border: 1px solid #4c59cc;
    cursor: pointer;

    &:hover {
      background-color: #6671d3;
      border: 1px solid #6671d3;
    }
  }
`;
