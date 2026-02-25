import { useState } from "react";
import { auth } from "./auth.api.js";
import { card } from "./card.api.js";
import { deck } from "./deck.api.js";

export const useApi = () => {
  const { token, logout } = useAuth();
  //TODO deal with expired jwt here
  const wrap =
    (func) =>
    async (...args) => {
      const data = await func(...args, token);
      if (data?.status === 401) logout();
      return data;
    };

  return {
    auth: {
      login: wrap(auth.login),
      createUser: wrap(auth.createUser),
    },
    card: {
      fetchByDeck: wrap(card.fetchByDeck),
      createNewCard: wrap(card.createNewCard),
    },
    deck: {
      submitNewDeck: wrap(deck.submiteNewDeck),
      getAllDecks: wrap(deck.getAllDecks),
      removeDeck: wrap(deck.removeDeck),
    },
  };
};
