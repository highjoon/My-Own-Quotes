import React, { Fragment, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import QuoteForm from "@components/QuoteForm";
import QuotesFetchError from "@components/QuotesFetchError";
import { useUpdateQuoteMutation } from "@services/quotes";
import { IQuote } from "@typings/quote";
import { AxiosError } from "@typings/http";

const UpdateQuote: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const state = useLocation().state as { quoteData: IQuote };
  const [updateQuote, { error, isLoading, isSuccess, isError }] = useUpdateQuoteMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate(`/quotes`, { replace: true });
    }
  }, [isSuccess, navigate]);

  const updateQuoteHandler = (quoteData: IQuote) => {
    updateQuote({ id, ...quoteData });
  };

  if (error || isError) {
    return <QuotesFetchError error={error as AxiosError} />;
  }

  return (
    <Fragment>
      <QuoteForm isLoading={isLoading} onUpdateQuote={updateQuoteHandler} originalQuote={state.quoteData} />
    </Fragment>
  );
};

export default UpdateQuote;
