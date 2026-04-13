import { useActiveDeck } from "@/providers/index.mjs";
export const Reset = () => {
  const { updateDeck, deck } = useActiveDeck();
  const handleChange = () => {
    const newMode = deck.mode === "default" ? "creator" : "default";
    updateDeck({ mode: newMode });
  };
  return <button onClick={handleChange}> Go Back</button>;
};
