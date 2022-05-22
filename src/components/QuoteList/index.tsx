import React, { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonConatiner, List, SortButton } from "@components/QuoteList/styles";
import QuoteItem from "@components/QuoteItem";
import DUMMY_QUOTES from "@api/mockAPI";

const sortQuotes = (quotes: Array<{ id: string; author: string; text: string }>, isAsc: boolean) => {
  return quotes.sort((a, b) => {
    if (isAsc) return a.id > b.id ? 1 : -1;
    else return a.id < b.id ? 1 : -1;
  });
};

const QuoteList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isAsc = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(DUMMY_QUOTES, isAsc);
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
