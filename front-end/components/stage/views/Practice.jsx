import { useActiveDeck } from "@/providers/index.mjs";
export const Practice = () => {
  const { card } = useActiveDeck();
  return (
    <>
      {!card.revealed ? (
        <> Question: {card.front} </>
      ) : (
        <> Answer {card.back}</>
      )}
      <br />
    </>
  );
};
