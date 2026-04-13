import { useActiveDeck } from "@/providers/index.mjs";

export const Default = () => {
  const { updateDeck, isEmpty } = useActiveDeck();
  return (
    <>
      {!isEmpty() && (
        <button onClick={() => updateDeck({ mode: "practice" })}>
          Go to practice
        </button>
      )}
      <button className={"button"} onClick={() => updateDeck({ mode: "edit" })}>
        Edit
      </button>
    </>
  );
};
