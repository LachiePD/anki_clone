import { useActiveDeck } from "@/providers/index.mjs";

export const Inspect = () => {
  const activeDeck = useActiveDeck();
  const cardCount = activeDeck.cardList.length;
  return <div>"Number of cards: " {cardCount}</div>;
};
