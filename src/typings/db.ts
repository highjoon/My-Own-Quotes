export type Data = { author: string; text: string };

export interface IQuote {
  id: string;
  author: string;
  text: string;
}

export interface IHighlightedQuote {
  text: string;
  author: string;
}
