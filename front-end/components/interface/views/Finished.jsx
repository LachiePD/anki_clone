import { useActiveDeck } from "@/providers/index.mjs";
export const Finished = () => {
  const { updateDeck } = useActiveDeck();

  return (
    <button onClick={() => updateDeck({ mode: "default" })}>Go Back</button>
  );
};
