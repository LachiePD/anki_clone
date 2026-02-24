"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useActiveDeck } from "@/features/deck/index";
export const ActiveCardContext = createContext();

export const ActiveCardProvider = ({ children }) => {
  const activeDeck = useActiveDeck();
  const [content, setContent] = useState({ front: "", back: "" });
  const [isRevealed, setRevealed] = useState(false);

  const nextCard = () => {
    const { front, back } = activeDeck.actions.drawNextCard();
    setContent({ front, back });
  };
  useEffect(() => {
    activeDeck.fetchCard();
  }, []);

  const toggleRevealed = () => {
    setRevealed((prev) => !prev);
  };

  const value = { content, toggleRevealed };

  return (
    <ActiveCardContext.Provider value={value}>
      {children}
    </ActiveCardContext.Provider>
  );
};

export const useActiveCard = () => useContext(ActiveCardContext);
