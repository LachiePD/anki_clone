import { useActiveDeck } from "@/providers/index.mjs";

export const Flashcard = () => {
  const { getCard } = useActiveDeck();
  const card = getCard();
  const renderRevealed = () => {
    return (
      <>
        ANSWER: {card.content.back}
        <br />
      </>
    );
  };
  return (
    <>
      QUESTION: {card.content.front}
      <br />
      {card.isRevealed && renderRevealed()}
    </>
  );
};
