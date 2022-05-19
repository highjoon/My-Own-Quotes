import { IWord } from "@/types/db";
import React, { FC } from "react";
import { Item } from "@components/WordItem/styles";
import { Link } from "react-router-dom";

const WordItem: FC<IWord> = ({ id, title, text }) => {
  return (
    <Item>
      <figure>
        <blockquote>
          <p>{title}</p>
        </blockquote>
        <figcaption>{text}</figcaption>
      </figure>
      <Link className="btn" to={`/words/${id}`}>
        Detail
      </Link>
    </Item>
  );
};

export default WordItem;
