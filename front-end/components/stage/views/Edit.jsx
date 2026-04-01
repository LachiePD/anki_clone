import { useActiveDeck } from "@/providers/index.mjs";

export const Edit = () => {
  const { deck } = useActiveDeck();

  return <>Number of cards: {deck.length}</>;
};
