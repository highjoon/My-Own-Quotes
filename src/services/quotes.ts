import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { IQuote } from "@typings/quote";
import { FIREBASE_DOMAIN } from "@constants/http";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const quotesApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: `${FIREBASE_DOMAIN}` }),
  tagTypes: [],
  endpoints: builder => ({
    getAllQuotes: builder.query({
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
    getSingleQuote: builder.query({
      query: (id: string) => ({ url: `quotes/${id}.json`, method: "get" }),
      transformResponse: (response: IQuote): IQuote => {
        return response;
      },
    }),
    addQuote: builder.mutation({
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
