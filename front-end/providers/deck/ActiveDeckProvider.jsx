"use client";
import { useContext, createContext, useEffect } from "react";
import { useDeckList, useApi } from "@/providers/index.mjs";
import { useDeckState } from "./useDeckState.jsx";
const ActiveDeckContext = createContext();
//TODO, this currently manages both card and deck stuff, should only really do one

export const ActiveDeckProvider = ({ children }) => {
  const deckList = useDeckList();
  const deck = useDeckState();
  const api = useApi();

  useEffect(() => {
    if (!deck.getId) return;
    deck.setMode.inspect();
    fetchCards();
  }, [deck.getId]);

  const fetchCards = async () => {
    const data = await api.card.fetchByDeck(deck.getId);
    deck.setCardList(data.cards);
  };

  const refresh = async () => {
    await fetchCards();
  };

  const getDeckLength = () => deck.getCardList.length;

  const getCard = () => {
    const index = deck.getIndex();
    const cardList = deck.getCardList();
    return cardList[index];
  };

  const incrementCardList = () => {
    const newIndex = 1 + deck.getIndex();
    deck.setIndex(newIndex);
  };

  //TODO , this is managing returning a card? shouldnt do that I dont think, maybe better off having activeCard context...
  //note, i think a bug will appear here, the index wont be updated when isFinished runs
  const drawNextCard = () => {
    incrementCardList();
    if (isFinished()) return null;
    return getCard();
  };

  const isFinished = () => {
    const index = deck.getIndex();
    const deckLength = getDeckLength();
    if (index >= deckLength) {
      deck.setMode.finished();
      deck.setIndex(0);
      return true;
    } else {
      return false;
    }
  };

  const value = {
    deck,
    actions: {
      drawNextCard,
      refresh,
    },
  };

  return (
    <ActiveDeckContext.Provider value={value}>
      {children}
    </ActiveDeckContext.Provider>
  );
};

export const useActiveDeck = () => useContext(ActiveDeckContext);
