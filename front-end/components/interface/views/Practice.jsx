import { useActiveDeck } from "@/providers/index.mjs";
export const Practice = () => {
  const { deck, card } = useActiveDeck();

  const toggleRevealed = () => setRevealed(!revealed);

  if (card.revealed) {
    return (
      <>
        <button onClick={card.toggleRevealed}>Try Again</button>
        <button onClick={deck.drawNextCard}> Correct! </button>
      </>
    );
  } else if (!card.revealed) {
    return <button onClick={card.toggleRevealed}> Show Answer!</button>;
  }
};
