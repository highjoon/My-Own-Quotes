import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import HighlightedQuote from "@components/HighlightedQuote";
import LoadingSpinner from "@components/UI/LoadingSpinner";
import { Error } from "@components/QuotesFetchError/styles";
import { NoQuoteFound } from "@pages/QuoteDetail/styles";
import useHttp from "@hooks/useHttp";
import { getSingleQuote } from "@lib/api";

const QuoteDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  const { sendRequest, status, data: quoteData, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  if (!quoteData) {
    return <NoQuoteFound>No Quote Found!</NoQuoteFound>;
  }

  return <Fragment>{<HighlightedQuote text={quoteData.text} author={quoteData.author} />}</Fragment>;
};

export default QuoteDetail;
