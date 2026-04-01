import { useActiveDeck } from "@/providers/index.mjs";
export const Practice = () => {
  const { card, deck } = useActiveDeck();
  console.log(card.revealed);
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
