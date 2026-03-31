"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { useDeckList, useApi } from "@/providers/index.mjs";

const ActiveDeckContext = createContext();

export const ActiveDeckProvider = ({ children }) => {
  const [deckId, setDeckId] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const deckList = useDeckList();
  const [deckMode, setDeckMode] = useState("Default");
  const api = useApi();

  useEffect(() => {
    if (!deckId) return;
    setDeckMode.inspect();
    fetchCards();
  }, [deckId]);

  const fetchCards = async () => {
    const data = await api.card.fetchByDeck(deckId);
    setCardList(data.cards);
  };

  const refresh = async () => {
    await fetchCards();
  };

  const drawNextCard = () => {
    const newIndex = cardIndex + 1;
    if (isFinished(newIndex)) return null;
    setCardIndex(newIndex);
    return cardList[newIndex];
  };

  const isFinished = (givenIndex) => {
    if (givenIndex + 1 >= cardList.length) {
      setDeckMode.finished();
      setCardIndex(0);
      return true;
    } else {
      return false;
    }
  };

  const setMode = {
    practice: () => setDeckMode("practicing"),
    edit: () => setDeckMode("editing"),
    inspect: () => setDeckMode("inspecting"),
    finished: () => setDeckMode("finished"),
  };

  const getMode = () => deckMode;
  const fetchCard = () => {
    if (cardList.length === 0) {
      return;
    }
    return cardList[cardIndex];
  };
  const value = {
    cardList,
    deckId,
    setMode,
    actions: {
      getMode,
      drawNextCard,
      refresh,
      fetchCard,
      setDeckId,
    },
  };

  return (
    <ActiveDeckContext.Provider value={value}>
      {children}
    </ActiveDeckContext.Provider>
  );
};

export const useActiveDeck = () => useContext(ActiveDeckContext);
