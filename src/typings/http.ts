import { IQuote } from "@typings/quote";

export type States =
  | { data: null; error: null; status: string }
  | { data: Array<IQuote>; error: null; status: string }
  | { data: null; error: string; status: string }
  | { data: null; error: null; status: null };

export type Actions =
  | { type: "SEND" }
  | { type: "SUCCESS"; responseData: Array<IQuote> }
  | { type: "ERROR"; errorMessage: string };
