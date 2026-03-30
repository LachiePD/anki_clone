import { card, auth, deck } from "@/api/index.mjs";
import { useAuth } from "./AuthProvider.jsx";
export const useApi = () => {
  const authContext = useAuth();
  const errorHandler =
    (func) =>
    async (...args) => {
      const data = await func(...args);
      if (data.status !== 200) {
        console.log("ERROR SON, useApi");
        return;
      }
      return data;
    };

  return {
    auth: {
      login: errorHandler(auth.login),
      createUser: errorHandler(auth.createUser),
      verify: errorHandler(auth.verify),
    },
    card: {
      fetchByDeck: errorHandler(card.fetchByDeck),
      newCard: errorHandler(card.newCard),
    },
    deck: {
      createDeck: errorHandler(deck.createDeck),
      getAllDecks: errorHandler(deck.getDecks),
      removeDeck: errorHandler(deck.removeDeck),
    },
  };
};
