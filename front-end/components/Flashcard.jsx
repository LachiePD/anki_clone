import { useActiveCard } from "@/providers/index.mjs";

export const Flashcard = () => {
  const card = useActiveCard();
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
