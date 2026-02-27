"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { useDeckList } from "./DeckListContext.jsx";
import { useDeckMode } from "../hooks/useDeckMode";
import { useApi } from "@/features/api/index";
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

  const selectDeckById = (id) => {
    const deck = deckList.actions.findById(id);
    setDeckId(deck.id);
  };

  const refresh = () => {
    fetchCards();
  };

  const drawNextCard = () => {
    if (isFinished()) {
      return null;
    } else {
      const newIndex = cardIndex + 1;
      setCardIndex(newIndex);
      return cardList[newIndex];
    }
  };

  const isFinished = () => {
    if (cardIndex + 1 >= cardList.length) {
      mode.actions.setFinished();
      return true;
    } else {
      return false;
    }
  };
  const fetchCard = () => {
    if (cardList.length === 0) {
      return;
    }
    return cardList[cardIndex];
  };
  const value = {
    mode,
    cardList,
    deckId,
    actions: {
      selectDeckById,
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
