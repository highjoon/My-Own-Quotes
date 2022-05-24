import { IQuote } from "@typings/quote";
import { FIREBASE_DOMAIN } from "@constants/http";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${FIREBASE_DOMAIN}/` }),
  tagTypes: [],
  endpoints: builder => ({
    getAllQuotes: builder.query({
      query: () => "quotes.json",
      transformResponse: (response: Array<IQuote>) => {
        const result = [];
        for (const key in response) {
          result.push({ id: key, ...response[key] });
        }
        return result;
      },
    }),
  }),
});

export const { useGetAllQuotesQuery } = quotesApi;
