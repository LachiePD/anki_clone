import { card, auth, deck } from "@/api/index.mjs";
import { useAuth } from "./AuthProvider.jsx";
export const useApi = () => {
  const authContext = useAuth();
  const errorHandler =
    (func) =>
    async (...args) => {
      const response = await func(...args);
      if (!response.ok) {
        console.log("ERROR ");
        console.log(response);
        console.log(await response.error);
        throw new Error(response.error);
        return;
      }
      return response;
    };

  const optomisticHandler =
    (apiCall) => async (payload, oldState, newState, updateState) => {
      updateState(newState);
      const response = await apiCall(payload);
      if (!response.ok) {
        updateState(oldState);
        throw new Error(`Error handling ${apiCall}`);
      }
    };

  return {
    //TODO, MIGRATE ALL THESE TO USE OPTOMISTICHANDLERE
    auth: {
      login: errorHandler(auth.login),
      createUser: errorHandler(auth.createUser),
      verify: errorHandler(auth.verify),
    },
    card: {
      fetchByDeck: errorHandler(card.fetchByDeck),
      newCard: optomisticHandler(card.newCard),
    },
    deck: {
      createDeck: errorHandler(deck.createDeck),
      getAllDecks: errorHandler(deck.getDecks),
      removeDeck: errorHandler(deck.removeDeck),
    },
  };
};
