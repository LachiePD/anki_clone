"use client";
import { useContext, createContext, useState, useEffect } from "react";
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
    deck.setDeckList(data.cards);
  };

  const refresh = async () => {
    await fetchCards();
  };

  const fetchCard = () => {
    if (deck.cardList.length === 0) {
      return;
    }
    return deck.cardList[deck.index];
  };

  //TODO , this is managing returning a card? shouldnt do that I dont think
  const drawNextCard = () => {
    const newIndex = deck.index + 1;
    if (isFinished(newIndex)) return null;
    return deck.cardList[newIndex];
  };

  const isFinished = (givenIndex) => {
    if (givenIndex + 1 >= deck.cardList.length) {
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
      getMode,
      drawNextCard,
      refresh,
      fetchCard,
    },
  };

  return (
    <ActiveDeckContext.Provider value={value}>
      {children}
    </ActiveDeckContext.Provider>
  );
};

export const useActiveDeck = () => useContext(ActiveDeckContext);
