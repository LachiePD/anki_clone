import { useActiveCard } from "./providers/ActiveCardProvider";

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
      hi QUESTION: {card.content.front}
      <br />
      {card.isRevealed && renderRevealed()}
    </>
  );
};
