import axios from "axios";
import { IQuote } from "@typings/quote";
import { FIREBASE_DOMAIN } from "@constants/http";

export const addQuote = async (quoteData: IQuote) => {
  try {
    axios.post(`${FIREBASE_DOMAIN}/quotes.json`, quoteData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    let errorMessage = "Could not create quote.";
    if (error instanceof Error) errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

export const getAllQuotes = async () => {
  try {
    const { data } = await axios.get(`${FIREBASE_DOMAIN}/quotes.json`);
    const result = [];
    for (const key in data) {
      result.push({ id: key, ...data[key] });
    }
    return result;
  } catch (error) {
    let errorMessage = "Could not fetch quotes.";
    if (error instanceof Error) errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

export const getSingleQuote = async (id: string) => {
  try {
    const { data } = await axios.get(`${FIREBASE_DOMAIN}/quotes/${id}.json`);
    const result = { id, ...data };
    return result;
  } catch (error) {
    let errorMessage = "Could not fetch quote.";
    if (error instanceof Error) errorMessage = error.message;
    throw new Error(errorMessage);
  }
};
