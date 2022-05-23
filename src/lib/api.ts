import axios from "axios";
import { Data } from "@typings/quote";
import { FIREBASE_DOMAIN } from "@constants/http";

export const addQuote = async (quoteData: Data) => {
  axios.post(`${FIREBASE_DOMAIN}/quotes.json`, quoteData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAllQuotes = async () => {
  const { data } = await axios.get(`${FIREBASE_DOMAIN}/quotes.json`);
  const result = [];
  for (const key in data) {
    result.push({ id: key, ...data[key] });
  }
  return result;
};
