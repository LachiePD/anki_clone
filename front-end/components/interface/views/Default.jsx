import { useActiveDeck } from "@/providers/index.mjs";

export const Default = () => {
  const { actions } = useActiveDeck();
  return (
    <>
      <button onClick={actions.startPractice}>Go to practice</button>

      <button className={"button"} onClick={actions.startEditing}>
        Edit
      </button>
    </>
  );
};
