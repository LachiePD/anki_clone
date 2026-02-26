import { useState } from "react";
import { auth } from "./auth.api.js";
import { card } from "./card.api.js";
import { deck } from "./deck.api.js";

export const useApi = () => {
  const wrap =
    (func) =>
    async (...args) => {
      const data = await func(...args);
      if (data.code === 401) {
        if (data.error === "TokenExpiredError") {
          return;
        }
        console.log("data error");
      }
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
      //TODO deck.submitNewDeck --> createNewDeck
      createNewDeck: wrap(deck.submitNewDeck),
      getAllDecks: wrap(deck.getDecks),
      removeDeck: wrap(deck.removeDeck),
    },
  };
};
