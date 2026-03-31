import { useActiveCard } from "@/providers/index.mjs";
export const Practice = () => {
  const activeCard = useActiveCard();

  if (activeCard.isRevealed) {
    return (
      <>
        <button onClick={activeCard.toggleRevealed}>Try Again</button>
        <button onClick={activeCard.nextCard}> Correct! </button>
      </>
    );
  }

  if (!activeCard.isRevealed) {
    return <button onClick={activeCard.toggleRevealed}> Show Answer!</button>;
  }
};
