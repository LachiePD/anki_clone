import { useActiveDeck } from "@/providers/index.mjs";
export const Finished = () => {
  const { setDeckMode } = useActiveDeck();

  return <button onClick={setDeckMode.finished}>Go Back</button>;
};
