import React, { Fragment, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AddBtn, Card, TextBox, Form } from "@components/QuoteForm/styles";
import { addQuote } from "@lib/api";

const QuoteForm: React.FC = () => {
  const authorRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const submitFormHandler = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const author = authorRef.current?.value;
      const text = textRef.current?.value;

      if (author?.trim() && text?.trim()) {
        try {
          addQuote({ author, text });
          navigate("/quotes");
        } catch (error) {
          console.dir(error);
        }
      }
    },
    [authorRef, textRef],
  );

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
