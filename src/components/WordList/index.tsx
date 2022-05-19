import React, { FC, Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { List, SortButton } from "@components/WordList/styles";
import WordItem from "@components/WordItem";

const DUMMY_WORD = [
  { id: 1, title: "Dummy Title 1", text: "Dummy Text 1" },
  { id: 2, title: "Dummy Title 2", text: "Dummy Text 2" },
  { id: 3, title: "Dummy Title 3", text: "Dummy Text 3" },
  { id: 4, title: "Dummy Title 4", text: "Dummy Text 4" },
  { id: 5, title: "Dummy Title 5", text: "Dummy Text 5" },
  { id: 6, title: "Dummy Title 6", text: "Dummy Text 6" },
];

const sortWords = (words: Array<{ id: number; title: string; text: string }>, isAsc: boolean) => {
  return words.sort((a, b) => {
    if (isAsc) return a.id > b.id ? 1 : -1;
    else return a.id < b.id ? 1 : -1;
  });
};

const WordList: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isAsc = queryParams.get("sort") === "asc";
  const sortedWords = sortWords(DUMMY_WORD, isAsc);
  const sortHandler = () => {
    navigate({
      pathname: location.pathname,
      search: `sort=${isAsc ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <SortButton onClick={sortHandler}>Sort {isAsc ? "Descending" : "Ascending"}</SortButton>
      <List>
        {sortedWords?.map(word => (
          <WordItem key={word.id} id={word.id} title={word.title} text={word.text} />
        ))}
      </List>
    </Fragment>
  );
};

export default WordList;
