import { useState } from "react";
export const useDeckState = () => {
  const [deck, setDeck] = useState({
    id: null,
    cardList: [],
    index: 0,
    mode: "Default",
  });
  const length = deck.cardList.length;

  const setIndex = (index) => setDeck({ ...deck, index });
  const setCardList = (cardList) => setDeck({ ...deck, cardList });

  const setMode = {
    practice: () => setDeck({ ...deck, mode: "practicing" }),
    edit: () => setDeck({ ...deck, mode: "editing" }),
    inspect: () => setDeck({ ...deck, mode: "inspecting" }),
    finished: () => setDeck({ ...deck, mode: "finished" }),
  };
  const getCard = () => {
    const index = deck.index;
    const cardList = deck.cardList;
    return cardList[index];
  };

  const drawNextCard = () => {
    increment();
    if (isFinished()) return null;
    return getCard();
  };

  const increment = () => {
    const newIndex = 1 + deck.index;
    deck.setIndex(newIndex);
  };
  //note, i think a bug will appear here, the index wont be updated when isFinished runs
  const isFinished = () => {
    const index = deck.index;
    const deckLength = getDeckLength();
    if (index >= deck.length) {
      deck.setMode.finished();
      deck.setIndex(0);
      return true;
    } else {
      return false;
    }
  };

  return {
    id: deck.id,
    mode: deck.mode,
    setCardList,
    setMode,
    getCard,
  };
};
