import React, { Fragment, useCallback } from "react";
import { AddBtn, Card, TextBox, Form } from "@components/QuoteForm/styles";
import LoadingSpinner from "@components/UI/LoadingSpinner";
import { IQuote } from "@typings/quote";
import useInput from "@hooks/useInput";

interface Props {
  isLoading: boolean;
  onAddQuote: ({ author, text }: IQuote) => void;
}

const QuoteForm: React.FC<Props> = ({ isLoading, onAddQuote }) => {
  const [newAuthor, onChangeNewAuthor] = useInput("");
  const [newText, onChangeNewText] = useInput("");

  const submitFormHandler = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (newAuthor?.trim() && newText?.trim()) {
        onAddQuote({ author: newAuthor, text: newText });
      }
    },
    [newAuthor, newText],
  );

  return (
    <Fragment>
      <Card>
        <Form onSubmit={submitFormHandler}>
          {isLoading && <LoadingSpinner />}
          <TextBox>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" value={newAuthor} onChange={onChangeNewAuthor} />
          </TextBox>
          <TextBox>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows={5} value={newText} onChange={onChangeNewText} />
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
