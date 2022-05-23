import { IQuote } from "@typings/quote";

export type States =
  | { data: any; error: null | string; status: string }
  | { data: null; error: string; status: string }
  | { data: null; error: null; status: null };

export type Actions =
  | { type: "SEND" }
  | { type: "SUCCESS"; responseData: any }
  | { type: "ERROR"; errorMessage: string };
