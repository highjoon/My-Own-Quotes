import React from "react";
import { Quote } from "@components/HighlightedQuote/styles";
import { IQuote } from "@typings/quote";

const HighlightedQuote: React.FC<IQuote> = ({ text, author }) => {
  return (
    <Quote>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </Quote>
  );
};

export default HighlightedQuote;
