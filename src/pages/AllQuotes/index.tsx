import React, { Fragment, useEffect } from "react";
import QuoteList from "@components/QuoteList";
import NoQuotesFound from "@components/NoQuotesFound";
import LoadingSpinner from "@components/UI/LoadingSpinner";
import QuotesFetchError from "@components/QuotesFetchError";
import { getAllQuotes } from "@lib/api";
import useHttp from "@hooks/useHttp";

const AllQuotes: React.FC = () => {
  const { sendRequest, status, data: loadedAllQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <QuotesFetchError />;
  }

  if (status === "completed" && (!loadedAllQuotes || loadedAllQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <QuoteList quotes={loadedAllQuotes} />
    </Fragment>
  );
};

export default AllQuotes;
