import { useFlashcard } from "./useFlashcard";
export const Flashcard = () => {
  const card = useFlashcard();
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
