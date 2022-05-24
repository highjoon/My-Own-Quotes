import { createApi } from "@reduxjs/toolkit/query/react";
import { IQuote } from "@typings/quote";
import { FIREBASE_DOMAIN } from "@constants/http";
import { axiosBaseQuery } from "@libs/api";

export const quotesApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: `${FIREBASE_DOMAIN}` }),
  tagTypes: ["Quotes"],
  endpoints: builder => ({
    getAllQuotes: builder.query<Array<IQuote>, IQuote | string>({
      query: () => ({ url: "quotes.json", method: "GET" }),
      transformResponse: (response: IQuote): Array<IQuote> => {
        const result = [];
        if (response) {
          for (const [key, value] of Object.entries(response)) {
            result.push({
              id: key,
              author: value.author,
              text: value.text,
            });
          }
        }
        return result;
      },
      providesTags: result =>
        result
          ? [...result.map(({ id }) => ({ type: "Quotes", id } as const)), { type: "Quotes", id: "List" }]
          : [{ type: "Quotes", id: "List" }],
    }),
    getSingleQuote: builder.query<IQuote, string>({
      query: id => ({ url: `quotes/${id}.json`, method: "GET" }),
      transformResponse: (response: IQuote): IQuote => response,
      providesTags: (result, error, id) => [{ type: "Quotes", id }],
    }),
    addQuote: builder.mutation<IQuote, Partial<IQuote>>({
      query: newQuote => ({
        url: "/quotes.json",
        method: "POST",
        data: JSON.stringify(newQuote),
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: [{ type: "Quotes", id: "List" }],
    }),
    delteQuote: builder.mutation<{ id: string }, string>({
      query: id => ({ url: `quotes/${id}.json`, method: "DELETE" }),
      invalidatesTags: (result, error, id) => [{ type: "Quotes", id }],
    }),
  }),
});

export const { useGetAllQuotesQuery, useGetSingleQuoteQuery, useAddQuoteMutation, useDelteQuoteMutation } = quotesApi;
