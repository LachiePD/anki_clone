import { useActiveDeck } from "@/providers/index.mjs";
export const Practice = () => {
  const { card, deck, toggleRevealed, drawNextCard } = useActiveDeck();
  if (card.revealed) {
    return (
      <>
        <button onClick={toggleRevealed}>Try Again</button>
        <button onClick={drawNextCard}> Correct! </button>
      </>
    );
  } else if (!card.revealed) {
    return <button onClick={toggleRevealed}> Show Answer!</button>;
  }
};
