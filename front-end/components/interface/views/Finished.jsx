import { useActiveDeck } from "@/providers/index.mjs";
export const Finished = () => {
  const { actions } = useActiveDeck();

  return <button onClick={actions.setDeckMode.inspecting}>Go Back</button>;
};
