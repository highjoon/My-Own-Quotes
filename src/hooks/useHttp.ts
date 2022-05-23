import { useReducer, useCallback } from "react";
import { States, Actions } from "@typings/http";
import { IQuote } from "@typings/quote";

const httpReducer = (state: States, action: Actions): States => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
};

const useHttp = (requestFunction: any, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    error: null,
    status: startWithPending ? "pending" : null,
  });

  const sendRequest = useCallback(
    async (requestData?: IQuote | string) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        let errorMessage = "Something went wrong!";
        if (error instanceof Error) errorMessage = error.message;
        dispatch({ type: "ERROR", errorMessage });
      }
    },
    [requestFunction],
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
