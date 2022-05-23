import React, { Fragment, useRef, useCallback } from "react";
import { AddBtn, Card, TextBox, Form } from "@components/QuoteForm/styles";
import LoadingSpinner from "@components/UI/LoadingSpinner";
import { IQuote } from "@typings/quote";

interface Props {
  isLoading: boolean;
  onAddQuote: ({ author, text }: IQuote) => void;
}

const QuoteForm: React.FC<Props> = ({ isLoading, onAddQuote }) => {
  const authorRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const author = authorRef.current?.value;
      const text = textRef.current?.value;

      if (author?.trim() && text?.trim()) {
        onAddQuote({ author, text });
      }
    },
    [authorRef, textRef],
  );

  return (
    <Fragment>
      <Card>
        <Form onSubmit={submitFormHandler}>
          {isLoading && <LoadingSpinner />}
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
