import React, { Fragment, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, NoQuoteFound } from "@pages/QuoteDetail/styles";
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

  const delelteQuoteHandler = useCallback(
    (id: string) => {
      deleteQuote(id);
    },
    [deleteQuote, id],
  );

  const editButtonHandler = useCallback(() => {
    navigate(`/quote/update/${id}`, {
      state: { quoteData },
      replace: true,
    });
  }, [navigate, quoteData, id]);

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
      <Button onClick={() => delelteQuoteHandler(id!)}>Delete</Button>
      <Button onClick={editButtonHandler}>Edit</Button>
    </Fragment>
  );
};

export default QuoteDetail;
