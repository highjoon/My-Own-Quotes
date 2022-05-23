import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "@components/QuoteForm";
import useHttp from "@hooks/useHttp";
import { addQuote } from "@lib/api";
import { IQuote } from "@typings/quote";

const NewQuote: React.FC = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData: IQuote) => {
    sendRequest(quoteData);
  };

  return (
    <Fragment>
      <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuote;
