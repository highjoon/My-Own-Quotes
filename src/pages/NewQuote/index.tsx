import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "@components/QuoteForm";
import QuotesFetchError from "@components/QuotesFetchError";
import { useAddQuoteMutation } from "@services/quotes";
import { IQuote } from "@typings/quote";
import { AxiosError } from "@typings/http";

const NewQuote: React.FC = () => {
  const navigate = useNavigate();

  const [addQuote, { error, isLoading, isSuccess, isError }] = useAddQuoteMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/quotes", { replace: true });
    }
  }, [isSuccess, navigate]);

  const addQuoteHandler = (quoteData: IQuote) => {
    addQuote(quoteData);
  };

  if (isError) {
    return <QuotesFetchError error={error as AxiosError} />;
  }

  return (
    <Fragment>
      <QuoteForm isLoading={isLoading} onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuote;
