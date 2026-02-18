import { useState, useEffect } from "react";
import { getDecks, submitNewDeck, removeDeck as removeDeckApi } from "@/api/deck/deck.api.js";
export const useDeckList = () => {
  const [deckList, setDeckList] = useState([]);
  useEffect(() => {
    fetchDecks();
  }, []);
  const createNewDeck = async (deckName) => {
    const response = await submitNewDeck(deckName);
    await fetchDecks();
  };

  const fetchDecks = async () => {
    const data = await getDecks();
    setDeckList(data.response.rows);
  };

  const removeDeck = async (deckId) => {
    await removeDeckApi(deckId);
    setDeckList((prev) => {
      return prev.filter((deck) => deck.id !== deckId);
    });
  };


	const api = {
		deckList, 
		actions:{ fetchDecks:fetchDecks,
		createNewDeck:createNewDeck,
		removeDeck:removeDeck,
		setDeckList:setDeckList,
	},
	}
	
  return api;
};
