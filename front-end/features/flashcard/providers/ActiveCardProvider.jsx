"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useActiveDeck } from "@/features/deck/index";
export const ActiveCardContext = createContext();

export const ActiveCardProvider = ({ children }) => {
  const activeDeck = useActiveDeck();
  const [content, setContent] = useState({ front: "", back: "" });
  const [isRevealed, setRevealed] = useState(false);

  useEffect(() => {
    const card = activeDeck.actions.fetchCard();

    if (!activeDeck.deckId || !card) return;

    handleNewCard(card);
  }, [activeDeck.cardList]);

  const handleNewCard = (card) => {
    const { front, back } = activeDeck.actions.fetchCard();
    setContent({ front, back });
  };

  const nextCard = () => {
    const card = activeDeck.actions.drawNextCard();
    if (!isValidCard(card)) return;
    handleNewCard(card);
  };

  const isValidCard = (card) => !!card;

  const toggleRevealed = () => {
    setRevealed((prev) => !prev);
  };

  const value = { content, isRevealed, toggleRevealed, nextCard };

  return (
    <ActiveCardContext.Provider value={value}>
      {children}
    </ActiveCardContext.Provider>
  );
};

export const useActiveCard = () => useContext(ActiveCardContext);
