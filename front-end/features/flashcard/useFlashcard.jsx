import { useState, useEffect } from "react";
import { useActiveDeck } from "@/features/deck/index.js";

export const useFlashcard = () => {
  const activeDeck = useActiveDeck();
  const [content, setContent] = useState({ front: "", back: "" });
  const [isRevealed, setRevealed] = useState(false);

  const nextCard = () => {
    const card = activeDeck.actions.drawNextCard();
  };
  useEffect(() => {
    nextCard();
  }, []);

  const toggleRevealed = () => {
    setRevealed((prev) => !prev);
  };

  return { content, toggleRevealed };
};
