import { IWord } from "@/types/db";
import React, { FC } from "react";
import { Item } from "@components/WordItem/styles";

const WordItem: FC<IWord> = ({ id, title, text }) => {
  return (
    <Item>
      <p>{id}</p>
      <p>{title}</p>
      <p>{text}</p>
    </Item>
  );
};

export default WordItem;
