import { useActiveDeck } from "@/providers/index.mjs";
export const Finished = () => {
  const { deck } = useActiveDeck();

  return <button onClick={deck.setMode.default}>Go Back</button>;
};
