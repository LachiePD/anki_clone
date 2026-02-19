import { useFlashcard } from "./useFlashcard.jsx";

const Practice = ({ cardList }) => {
  const flashcard = useFlashcard({ cardList });

  const endOfDeck = () => {
    if (flashcard.activeCardIndex + 1 > cardList.length) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
	  {endOfDeck() ? (<div>DeckFinished!</div> ):(
		  <>
      QUESTION: {flashcard.data.front}
      <br />
      <button onClick={flashcard.actions.toggleRevealed}>Show Answer</button>
      <br />
      {flashcard.isRevealed && (
        <>
          ANSWER: {flashcard.data.back}
          <br />
          <button onClick={flashcard.actions.toggleRevealed}>Try Again</button>
          <br />
          <button onClick={flashcard.actions.next}> Correct! </button>
        </>
      )}
	  </>)}

    </div>
  );
};

export default Practice;
