import React, { FC } from "react";
import { Quote } from "@components/HighlightedQuote/styles";
import { IHighlightedQuote } from "@/types/db";

const HighlightedQuote: FC<IHighlightedQuote> = ({ text, author }) => {
  return (
    <Quote>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </Quote>
  );
};

export default HighlightedQuote;
