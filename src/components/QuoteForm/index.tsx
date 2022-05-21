import React, { FC, Fragment, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AddBtn, Card, TextBox, Form } from "@components/QuoteForm/styles";
import DUMMY_QUOTES from "@api/mockAPI";

const QuoteForm: FC = () => {
  const navigate = useNavigate();
  const authorRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    const enteredAuthor = authorRef.current?.value;
    const enteredText = textRef.current?.value;

    if (enteredAuthor?.trim() && enteredText?.trim()) {
      addQuoteHandler({
        id: `${DUMMY_QUOTES.length + 1}`,
        author: enteredAuthor,
        text: enteredText,
      });
      navigate("/");
    }
  }, []);

  const addQuoteHandler = (newQuote: { id: string; author: string; text: string }) => {
    DUMMY_QUOTES.push(newQuote);
  };

  return (
    <Fragment>
      <Card>
        <Form onSubmit={submitFormHandler}>
          <TextBox>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorRef} />
          </TextBox>
          <TextBox>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows={5} ref={textRef} />
          </TextBox>
          <AddBtn>
            <button>Add Quote</button>
          </AddBtn>
        </Form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
