import { useActiveDeck } from "@/providers/index.mjs";

export const Default = () => {
  const { setDeckMode } = useActiveDeck();
  return (
    <>
      <button onClick={setDeckMode.practice}>Go to practice</button>

      <button className={"button"} onClick={setDeckMode.edit}>
        Edit
      </button>
    </>
  );
};
