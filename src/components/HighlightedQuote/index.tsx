import React from "react";
import { Quote } from "@components/HighlightedQuote/styles";
import { IHighlightedQuote } from "@typings/db";

const HighlightedQuote: React.FC<IHighlightedQuote> = ({ text, author }) => {
  return (
    <Quote>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </Quote>
  );
};

export default HighlightedQuote;
