import React from "react";
import { Error } from "@components/QuotesFetchError/styles";
import { AxiosError } from "@typings/http";

interface Props {
  error: AxiosError;
}

const QuotesFetchError: React.FC<Props> = ({ error }) => {
  return <Error>{error.data}</Error>;
};

export default QuotesFetchError;
