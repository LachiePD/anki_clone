import { useState } from "react";

export const useCard = () => {
  const [card, setCard] = useState({ revealed: false });

  const toggleRevealed = () =>
    setCard((prev) => ({ ...prev, revealed: !prev.revealed }));

  const setNewCard = (newCard) => setCard({ ...newCard, revealed: false });
  return { card, toggleRevealed, setNewCard };
};
