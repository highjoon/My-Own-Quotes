import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Item } from "@/components/QuoteItem/styles";
import { IQuote } from "@/types/db";

const QuoteItem: FC<IQuote> = ({ id, author, text }) => {
  return (
    <Item>
      <figure>
        <blockquote>
          <p>{author}</p>
        </blockquote>
        <figcaption>{text}</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${id}`}>
        View Detail
      </Link>
    </Item>
  );
};

export default QuoteItem;
