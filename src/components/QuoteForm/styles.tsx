import styled from "@emotion/styled";

export const Card = styled.div`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
`;

export const Form = styled.form`
  position: relative;
`;

export const TextBox = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input,
  & textarea {
    font: inherit;
    padding: 0.35rem;
    border-radius: 4px;
    background-color: #f0f0f0;
    border: 1px solid #c1d1d1;
    display: block;
    width: 100%;
    font-size: 1.25rem;
  }

  & input:focus,
  & textarea:focus {
    background-color: #c5c9d3;
    outline-color: #777c91;
  }
`;

export const AddBtn = styled.div`
  text-align: right;

  & button {
    color: white;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    background-color: #272c52;
    border: 1px solid #272c52;
    border-radius: 4px;
    cursor: pointer;
  }
`;
