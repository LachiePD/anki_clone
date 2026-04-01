import { useActiveDeck } from "@/providers/index.mjs";

export const Default = () => {
  const { deck } = useActiveDeck();
  return (
    <>
      <button onClick={deck.setMode.practice}>Go to practice</button>

      <button className={"button"} onClick={deck.setMode.edit}>
        Edit
      </button>
    </>
  );
};
