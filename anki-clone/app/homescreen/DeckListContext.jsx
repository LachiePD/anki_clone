"use client";
import { useState, createContext, useEffect, useContext } from "react";
import {
  getDecks,
  submitNewDeck,
  removeDeck as removeDeckApi,
} from "@/api/deck/deck.api.js";

const DeckListContext = createContext();

export const DeckListProvider = ({ children }) => {
  const [decks, setDecks] = useState([]);
	//TODO remove this, and make useActiveDeck a context, so this logic can live there instead. 
  const [selectedDeck, setSelectedDeck] = useState(null);

  useEffect(() => {
    fetchDecks();
  }, []);

  const selectDeckById = (id) => {
    const foundDeck = decks.find((deck) => deck.id === id);
    setSelectedDeck(foundDeck);
  };

  const createNewDeck = async (deckName) => {
    const response = await submitNewDeck(deckName);
    await fetchDecks();
  };

  const fetchDecks = async () => {
    const data = await getDecks();
    if (!data.response) {
      setDecks([]);
      return;
    }
    setDecks(data.response.rows);
  };

  const removeDeck = async (deckId) => {
    await removeDeckApi(deckId);
    setDecks((prev) => {
      return prev.filter((deck) => deck.id !== deckId);
    });
  };

  const value = {
    decks,
    selectedDeck,
    actions: {
      fetchDecks,
      createNewDeck,
      removeDeck,
      setDecks,
      selectDeckById,
    },
  };
  return (
    <DeckListContext.Provider value={value}>
      {children}
    </DeckListContext.Provider>
  );
};

export const useDeckList = () => useContext(DeckListContext);
