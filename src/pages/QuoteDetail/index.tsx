import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import HighlightedQuote from "@components/HighlightedQuote";
import DUMMY_QUOTES from "@api/mockAPI";

const QuoteDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const quoteData = DUMMY_QUOTES.filter(quote => quote.id.toString() === id)[0];

  if (!quoteData.text) {
    return <p>No Quote Found!</p>;
  }

  return <Fragment>{<HighlightedQuote text={quoteData.text} author={quoteData.author} />}</Fragment>;
};

export default QuoteDetail;
