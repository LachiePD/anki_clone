import { useActiveDeck } from "@/providers/index.mjs";
export const Practice = () => {
  const { getCard, deck } = useActiveDeck();
  const { drawNextCard } = deck;

  const [revealed, setRevealed] = useState(false);
  const toggleRevealed = () => setRevealed(!revealed);
  const card = getCard();

  if (revealed) {
    return (
      <>
        <button onClick={toggleRevealed}>Try Again</button>
        <button onClick={drawNextCard}> Correct! </button>
      </>
    );
  } else if (!isRevealed) {
    return <button onClick={toggleRevealed}> Show Answer!</button>;
  }
};
