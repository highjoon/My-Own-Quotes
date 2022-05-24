import React, { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonConatiner, List, SortButton } from "@components/QuoteList/styles";
import QuoteItem from "@components/QuoteItem";
import { IQuote } from "@typings/quote";

interface Props {
  quotes: Array<IQuote> | null;
}

const sortQuotes = (quotes: Array<IQuote> | null, isAsc: boolean) => {
  return quotes?.slice().sort((a, b) => {
    if (isAsc) return a.text > b.text ? 1 : -1;
    else return a.text < b.text ? 1 : -1;
  });
};

const QuoteList: React.FC<Props> = ({ quotes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isAsc = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(quotes, isAsc);

  const sortHandler = () => {
    navigate({
      pathname: location.pathname,
      search: `sort=${isAsc ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <ButtonConatiner>
        <SortButton onClick={sortHandler}>Sort {isAsc ? "Descending" : "Ascending"}</SortButton>
      </ButtonConatiner>
      <List>
        {sortedQuotes?.map(quote => (
          <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
        ))}
      </List>
    </Fragment>
  );
};

export default QuoteList;
