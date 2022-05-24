import React, { Fragment, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DeleteButton, NoQuoteFound } from "@pages/QuoteDetail/styles";
import HighlightedQuote from "@components/HighlightedQuote";
import LoadingSpinner from "@components/UI/LoadingSpinner";
import QuotesFetchError from "@components/QuotesFetchError";
import { useDelteQuoteMutation, useGetSingleQuoteQuery } from "@services/quotes";
import { AxiosError } from "@typings/http";

const QuoteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: quoteData, error, isLoading: isGettingQuote } = useGetSingleQuoteQuery(id!);
  const [deleteQuote, { isSuccess, isError, isLoading: isDeletingQuote }] = useDelteQuoteMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/quotes", { replace: true });
    }
  }, [isSuccess, navigate]);

  const delelteQuoteHandler = (id: string) => {
    deleteQuote(id);
  };

  if (isGettingQuote || isDeletingQuote) {
    return <LoadingSpinner />;
  }

  if (error || isError) {
    return <QuotesFetchError error={error as AxiosError} />;
  }

  if (!quoteData) {
    return <NoQuoteFound>No Quote Found!</NoQuoteFound>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quoteData.text} author={quoteData.author} />
      <DeleteButton onClick={() => delelteQuoteHandler(id!)}>Delete</DeleteButton>
    </Fragment>
  );
};

export default QuoteDetail;
