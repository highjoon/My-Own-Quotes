import React, { Fragment, useCallback } from "react";
import { AddBtn, Card, TextBox, Form } from "@components/QuoteForm/styles";
import LoadingSpinner from "@components/UI/LoadingSpinner";
import { IQuote } from "@typings/quote";
import useInput from "@hooks/useInput";

interface Props {
  isLoading: boolean;
  onAddQuote?: ({ author, text }: IQuote) => void;
  onUpdateQuote?: ({ author, text }: IQuote) => void;
  originalQuote?: IQuote;
}

const QuoteForm: React.FC<Props> = ({ isLoading, onAddQuote, onUpdateQuote, originalQuote }) => {
  const [newAuthor, onChangeNewAuthor] = useInput("");
  const [newText, onChangeNewText] = useInput("");

  const submitFormHandler = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (newAuthor?.trim() && newText?.trim()) {
        if (onAddQuote) {
          onAddQuote({ author: newAuthor, text: newText });
        }

        if (onUpdateQuote) {
          onUpdateQuote({ author: newAuthor, text: newText });
        }
      }
    },
    [newAuthor, newText, onAddQuote, onUpdateQuote],
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Card>
        <Form onSubmit={submitFormHandler}>
          <TextBox>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={newAuthor}
              onChange={onChangeNewAuthor}
              placeholder={originalQuote && originalQuote.author}
            />
          </TextBox>
          <TextBox>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows={5}
              value={newText}
              onChange={onChangeNewText}
              placeholder={originalQuote && originalQuote.text}
            />
          </TextBox>
          <AddBtn>
            {onAddQuote && <button> Add Quote</button>}
            {onUpdateQuote && <button> Update Quote</button>}
          </AddBtn>
        </Form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
