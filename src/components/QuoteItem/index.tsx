import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { Item } from "@components/QuoteItem/styles";
import { IQuote } from "../../types/db";

const QuoteItem: FC<IQuote> = ({ id, author, text }) => {
  return (
    <Item>
      <figure>
        <blockquote>
          <p>{author}</p>
        </blockquote>
        <figcaption>{text}</figcaption>
      </figure>
      <Link className="btn" to={`/quote/${id}`}>
        View Detail
      </Link>
      <Outlet />
    </Item>
  );
};

export default QuoteItem;
