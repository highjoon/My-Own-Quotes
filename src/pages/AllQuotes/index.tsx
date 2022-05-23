import React, { Fragment, useEffect } from "react";
import QuoteList from "@components/QuoteList";
import NoQuotesFound from "@components/NoQuotesFound";
import { getAllQuotes } from "@lib/api";
import useHttp from "@hooks/useHttp";

const AllQuotes: React.FC = () => {
  const { sendRequest, status, data: loadedAllQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <div>로딩중</div>;
  }

  if (error) {
    return <p>{error}</p>;
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
