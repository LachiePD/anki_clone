import { useState } from "react";
import { auth } from "./auth.api.js";
import { card } from "./card.api.js";
import { deck } from "./deck.api.js";

export const useApi = () => {
  const [response, setResponse] = useState(null);

  const createUser = async (credentials) => {
    await auth.createUser(credentials);
  };

  const attemptLogin = async (credentials) => {
    await auth.attemptLogin(credentials);
  };
  return { createUser };
};
