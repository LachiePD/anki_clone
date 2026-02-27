"use client";
import { useState, createContext, useEffect, useContext } from "react";

import { useApi } from "@/features/api/index";

const DeckListContext = createContext();

export const DeckListProvider = ({ children }) => {
  const api = useApi();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetchDecks();
  }, []);

  const createNewDeck = async (deckName) => {
    const response = await api.deck.createNewDeck(deckName);
    await fetchDecks();
  };

  const fetchDecks = async () => {
    const data = await api.deck.getAllDecks();
    if (!data) {
      setDecks([]);
      return;
    }
    setDecks(data.response.rows);
  };
  const findById = (id) => {
    const foundDeck = decks.find((deck) => deck.id === id);
    return foundDeck;
  };
  const removeDeck = async (deckId) => {
    await api.deck.removeDeck(deckId);
    setDecks((prev) => {
      return prev.filter((deck) => deck.id !== deckId);
    });
  };

  const value = {
    decks,
    actions: {
      findById,
      fetchDecks,
      createNewDeck,
      removeDeck,
      setDecks,
    },
  };
  return (
    <DeckListContext.Provider value={value}>
      {children}
    </DeckListContext.Provider>
  );
};

export const useDeckList = () => useContext(DeckListContext);
