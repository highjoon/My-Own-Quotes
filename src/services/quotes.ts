import { createApi } from "@reduxjs/toolkit/query/react";
import { IQuote } from "@typings/quote";
import { FIREBASE_DOMAIN } from "@constants/http";
import { axiosBaseQuery } from "@libs/api";

export const quotesApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: `${FIREBASE_DOMAIN}` }),
  tagTypes: [],
  endpoints: builder => ({
    getAllQuotes: builder.query<Array<IQuote>, number>({
      query: () => ({ url: "quotes.json", method: "get" }),
      transformResponse: (response: IQuote): Array<IQuote> => {
        const result = [];
        for (const [key, value] of Object.entries(response)) {
          result.push({
            id: key,
            author: value.author,
            text: value.text,
          });
        }
        return result;
      },
    }),
    getSingleQuote: builder.query<IQuote, string>({
      query: (id: string) => ({ url: `quotes/${id}.json`, method: "get" }),
      transformResponse: (response: IQuote): IQuote => response,
    }),
    addQuote: builder.mutation<IQuote, Partial<IQuote>>({
      query: (newQuote: { author: string; text: string }) => ({
        url: "/quotes.json",
        method: "post",
        data: JSON.stringify(newQuote),
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

export const { useGetAllQuotesQuery, useGetSingleQuoteQuery, useAddQuoteMutation } = quotesApi;
