import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { NoQuoteFound } from "@pages/QuoteDetail/styles";
import HighlightedQuote from "@components/HighlightedQuote";
import LoadingSpinner from "@components/UI/LoadingSpinner";
import QuotesFetchError from "@components/QuotesFetchError";
import { useGetSingleQuoteQuery } from "@services/quotes";
import { AxiosError } from "@typings/http";

const QuoteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: quoteData, error, isLoading } = useGetSingleQuoteQuery(id!);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <QuotesFetchError error={error as AxiosError} />;
  }

  if (!quoteData) {
    return <NoQuoteFound>No Quote Found!</NoQuoteFound>;
  }

  return <Fragment>{<HighlightedQuote text={quoteData.text} author={quoteData.author} />}</Fragment>;
};

export default QuoteDetail;
