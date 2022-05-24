import React, { Fragment } from "react";
import QuoteList from "@components/QuoteList";
import NoQuotesFound from "@components/NoQuotesFound";
import LoadingSpinner from "@components/UI/LoadingSpinner";
import QuotesFetchError from "@components/QuotesFetchError";
import { useGetAllQuotesQuery } from "@services/quotes";
import { AxiosError } from "@typings/http";
import { fetcher } from "@utils/fetcher";

const AllQuotes: React.FC = () => {
  const { data: loadedAllQuotes, error, isError, isLoading } = useGetAllQuotesQuery("", fetcher);

  if (isLoading && !loadedAllQuotes) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <QuotesFetchError error={error as AxiosError} />;
  }

  if (!loadedAllQuotes || loadedAllQuotes.length === 0) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <QuoteList quotes={loadedAllQuotes} />
    </Fragment>
  );
};

export default AllQuotes;
