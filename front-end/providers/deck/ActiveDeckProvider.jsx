"use client";
import { useContext, createContext, useEffect, useCallback } from "react";
import { useApi } from "@/providers/index.mjs";
import { useDeckState } from "./useDeckState.jsx";
import { useCard } from "./useCard.jsx";
const ActiveDeckContext = createContext();

export const ActiveDeckProvider = ({ children }) => {
  const { deck, updateDeck, isFinished, finishDeck, setDeck } = useDeckState(); //this is too much. spread the deckState where its exported, rename the module to deck= useDeckState();
  const { card, toggleRevealed, setNewCard } = useCard();
  const api = useApi();
  const deckLength = deck.cardList.length;

  useEffect(() => {
    if (!deck.id) return;
    fetchCards();
  }, [deck.id]);

  useEffect(() => {
    updateCard();
  }, [deck.cardList, deck.index]);

  const updateCard = () => setNewCard(deck.cardList[deck.index]);

  //TODO maybe check if this is necessary, may be stored in the sidebar anyway
  const fetchCards = async () => {
    const data = await api.card.fetchByDeck(deck.id);
    updateDeck({ cardList: data.cards, mode: "default" });
  };

  const refresh = async () => {
    await fetchCards();
  };

  const drawNextCard = () => {
    const newIndex = 1 + deck.index;
    if (isFinished(newIndex)) {
      finishDeck();
      return;
    }
    updateDeck({ index: newIndex });
  };

  const addNewCard = (card) => {
    const payload = { deckId: deck.id, card };
    const oldState = deck;
    const newCardList = [...deck.cardList, card];
    const newState = { ...deck, cardList: newCardList };
    api.card.newCard(payload, oldState, newState, setDeck);
  };
  const isEmpty = () => deck.cardList.length === 0;

  const value = {
    deck,
    updateDeck,
    refresh,
    card,
    toggleRevealed,
    drawNextCard,
    addNewCard,
    isEmpty,
  };

  return (
    <ActiveDeckContext.Provider value={value}>
      {children}
    </ActiveDeckContext.Provider>
  );
};

export const useActiveDeck = () => useContext(ActiveDeckContext);
