"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { fetchByDeck, createNewCard } from "@/api/card.api.js";
import { useDeckList } from "./DeckListContext.jsx";
import { useDeckMode } from "../hooks/useDeckMode";
const ActiveDeckContext = createContext();

export const ActiveDeckProvider = ({ children }) => {
  const [deckId, setDeckId] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const deckList = useDeckList();
  const mode = useDeckMode();

  useEffect(() => {
    fetchCards();
  }, [deckId]);

  const fetchCards = async () => {
    const data = await fetchByDeck(deckId);
    setCardList(data.cards);
  };

  //TODO this is wrong it feels like. This stream shouldnt try to populate itsself, should it?
  const selectDeckById = (id) => {
    const deck = deckList.actions.findById(id);
    setDeckId(deck.id);
  };

  const handleNewFlashcard = async (card) => {
    await createNewCard(deckId, card);
    fetchCards();
  };

  const drawNextCard = () => {
    const card = cardList[cardIndex];
    setCardIndex((prev) => prev + 1);
    return card;
  };
  const value = {
    mode,
    cardList,
    deckId,
    actions: {
      selectDeckById,
      handleNewFlashcard,
    },
  };

  return (
    <ActiveDeckContext.Provider value={value}>
      {children}
    </ActiveDeckContext.Provider>
  );
};

export const useActiveDeck = () => useContext(ActiveDeckContext);
