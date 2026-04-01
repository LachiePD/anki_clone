"use client";
import { useContext, createContext, useEffect, useCallback } from "react";
import { useApi } from "@/providers/index.mjs";
import { useDeckState } from "./useDeckState.jsx";
import { useCard } from "./useCard.jsx";
const ActiveDeckContext = createContext();

export const ActiveDeckProvider = ({ children }) => {
  const { deck, updateDeck, deckLength, increment, isFinished, finishDeck } =
    useDeckState(); //this is too much. spread the deckState where its exported, rename the module to deck= useDeckState();
  const { card, toggleRevealed, setNewCard } = useCard();
  const api = useApi();

  useEffect(() => {
    if (!deck.id) return;
    fetchCards();
    if (deckLength !== 0) {
      updateCard();
    }
  }, [deck.id]);

  const updateCard = () => {
    const currentCard = deck.cardList[deck.index];
    card.setNewCard(currentCard);
  };
  //maybe check if this is necessary, may be stored in the sidebar anyway
  const fetchCards = async () => {
    const data = await api.card.fetchByDeck(deck.id);
    updateDeck({ cardList: data.cards });
  };

  const refresh = async () => {
    await fetchCards();
  };

  const drawNextCard = () => {
    increment();
    if (isFinished()) {
      finishDeck();
      return;
    }
  };

  const value = {
    deck,
    updateDeck,
    refresh,
    card,
    toggleRevealed,
    drawNextCard,
  };

  return (
    <ActiveDeckContext.Provider value={value}>
      {children}
    </ActiveDeckContext.Provider>
  );
};

export const useActiveDeck = () => useContext(ActiveDeckContext);
