import { useActiveDeck } from "@/providers/index.mjs";

export const Edit = () => {
  const activeDeck = useActiveDeck();
  const deckLength = activeDeck.cardList.length;

  return <>{deckLength}</>;
};
