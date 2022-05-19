import React, { FC, Fragment } from "react";

import WordItem from "@components/WordItem";
import { List } from "@components/WordList/styles";

const DUMMY_WORD = [
  { id: 1, title: "제목1", text: "내용1" },
  { id: 2, title: "제목2", text: "내용2" },
  { id: 3, title: "제목3", text: "내용3" },
];

const WordList: FC = () => {
  return (
    <Fragment>
      <List>
        {DUMMY_WORD?.map(word => (
          <WordItem key={word.id} id={word.id} title={word.title} text={word.text} />
        ))}
      </List>
    </Fragment>
  );
};

export default WordList;
