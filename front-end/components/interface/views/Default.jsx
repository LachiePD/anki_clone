import { useActiveDeck } from "@/providers/index.mjs";

export const Default = () => {
  const { updateDeck } = useActiveDeck();
  return (
    <>
      <button onClick={() => updateDeck({ mode: "practice" })}>
        Go to practice
      </button>

      <button className={"button"} onClick={() => updateDeck({ mode: "edit" })}>
        Edit
      </button>
    </>
  );
};
