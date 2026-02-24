"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useActiveDeck } from "@/features/deck/index";
export const ActiveCardContext = createContext();

export const ActiveCardProvider = ({ children }) => {
  const activeDeck = useActiveDeck();
  const [isRevealed, setRevealed] = useState(false);

  const card = activeDeck.actions.fetchCard();
  let content = { front: "No Card", back: "" };

  if (card && activeDeck.deckId) {
    content = {
      front: card.front,
      back: card.back,
    };
  }
  const nextCard = () => {
    activeDeck.actions.drawNextCard();
    setRevealed(false);
  };

  const toggleRevealed = () => setRevealed((prev) => !prev);

  const value = { content, isRevealed, toggleRevealed, nextCard };

  return (
    <ActiveCardContext.Provider value={value}>
      {children}
    </ActiveCardContext.Provider>
  );
};

export const useActiveCard = () => useContext(ActiveCardContext);
