import { useState, useEffect } from "react";
import { useActiveDeck } from "@/features/deck/index.js";

export const useFlashcard = () => {
  const activeDeck = useActiveDeck();
  const [content, setContent] = useState({ front: "", back: "" });
  const [isRevealed, setRevealed] = useState(false);

  useEffect(() => {
    getNewCard(activeCardIndex);
  }, []);

  const toggleRevealed = () => {
    setRevealed((prev) => !prev);
  };

  return {};
};
