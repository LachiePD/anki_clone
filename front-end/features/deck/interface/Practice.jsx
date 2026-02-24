export const Practice = () => {
  return (
    <>
      <button onClick={card.toggleRevealed}>Try Again</button>
      <button onClick={card.nextCard}> Correct! </button>
    </>
  );
};
