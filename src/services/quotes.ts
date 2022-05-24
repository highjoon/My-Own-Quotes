import { IQuote } from "@typings/quote";
import { FIREBASE_DOMAIN } from "@constants/http";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${FIREBASE_DOMAIN}/` }),
  tagTypes: [],
  endpoints: builder => ({
    getAllQuotes: builder.query({
      query: () => "quotes.json",
      transformResponse: (response: IQuote): Array<IQuote> => {
        const result = [];
        for (const [key, value] of Object.entries(response)) {
          result.push({
            id: key,
            author: value.author,
            text: value.text
          });
        }
        return result;
      },
    }),
  }),
});

export const { useGetAllQuotesQuery } = quotesApi;
