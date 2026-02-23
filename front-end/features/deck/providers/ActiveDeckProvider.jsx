"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { fetchByDeck, createNewCard } from "@/api/card.api.js";
import { useDeckList } from "./DeckListContext.jsx";

const ActiveDeckContext = createContext();

export const ActiveDeckProvider = ({ children }) => {
  const [deckId, setDeckId] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);
  const deckList = useDeckList();

  useEffect(() => {
      fetchCards();
  }, [deckId]);

  const fetchCards = async () => {
    const data = await fetchByDeck(deckId);
    setCardList(data.cards);
  };

  const selectDeckById = (id) => {
    const deck = deckList.actions.findById(id);
    setDeckId(deck.id);
  };

  const handleNewFlashcard = async (card) => {
    await createNewCard(deckId, card);
    fetchCards();
  };

  const value = {
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
