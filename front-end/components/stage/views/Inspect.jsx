export const Inspect = ({ activeDeck }) => {
  const cardCount = activeDeck.cardList.length;
  return <div>"Number of cards: " {cardCount}</div>;
};
