"use client";
import { useContext, createContext, useEffect } from "react";
import { useDeckList, useApi } from "@/providers/index.mjs";
import { useDeckState } from "./useDeckState.jsx";
const ActiveDeckContext = createContext();

export const ActiveDeckProvider = ({ children }) => {
  const deckList = useDeckList();
  const deck = useDeckState();
  const api = useApi();

  useEffect(() => {
    if (!deck.id) return;
    deck.setMode.inspect();
    fetchCards();
  }, [deck.id]);

  const fetchCards = async () => {
    const data = await api.card.fetchByDeck(deck.id);
    deck.setCardList(data.cards);
  };

  const refresh = async () => {
    await fetchCards();
  };

  const value = {
    deck,
    refresh,
  };

  return (
    <ActiveDeckContext.Provider value={value}>
      {children}
    </ActiveDeckContext.Provider>
  );
};

export const useActiveDeck = () => useContext(ActiveDeckContext);
