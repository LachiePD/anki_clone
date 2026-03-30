import { card, auth, deck } from "@/api/index.mjs";
import { useAuth } from "./AuthProvider.jsx";
export const useApi = () => {
  const authContext = useAuth();
  const wrap =
    (func) =>
    async (...args) => {
      const data = await func(...args);
      if (data.status !== 200) {
        if (data.error === "TokenExpiredError") {
          authContext.actions.revokeAccess({ reason: "jwtExpired" });
          return;
        }
        console.log("ERROR SON, useApi");
        return;
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
      newCard: wrap(card.newCard),
    },
    deck: {
      createDeck: wrap(deck.createDeck),
      getAllDecks: wrap(deck.getDecks),
      removeDeck: wrap(deck.removeDeck),
    },
  };
};
