import { useActiveDeck } from "@/providers/index.mjs";
export const Finished = () => {
  const activeDeck = useActiveDeck();

  console.log(activeDeck.mode.currentMode);
  return (
    <button onClick={activeDeck.mode.actions.startInspecting}>Go Back</button>
  );
};
