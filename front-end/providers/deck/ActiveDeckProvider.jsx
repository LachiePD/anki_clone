"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { useDeckList, useDeckMode, useApi } from "@/providers/index.mjs";

const ActiveDeckContext = createContext();

export const ActiveDeckProvider = ({ children }) => {
  const [deckId, setDeckId] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const deckList = useDeckList();
  const mode = useDeckMode();
  const api = useApi();

  useEffect(() => {
    if (!deckId) return;
    mode.actions.startInspecting();
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
      mode.actions.setFinished();
      setCardIndex(0);
      return true;
    } else {
      return false;
    }
  };

  const setDeckMode = {
    practicing: mode.actions.startPracticing,
    editing: mode.actions.startEditing,
    inspecting: mode.actions.startInspecting,
    finished: mode.actions.setFinished,
  };
  const getMode = () => mode.currentMode;
  const fetchCard = () => {
    if (cardList.length === 0) {
      return;
    }
    return cardList[cardIndex];
  };
  const value = {
    cardList,
    deckId,
    actions: {
      setDeckMode,
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
