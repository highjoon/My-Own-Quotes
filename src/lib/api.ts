import axios from "axios";
import { Data } from "@typings/db";
import { FIREBASE_DOMAIN } from "@constants/http";

export const addQuote = async (quoteData: Data) => {
  axios.post(`${FIREBASE_DOMAIN}/quotes.json`, quoteData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
