import { useState } from "react";
export const useDeckState = () => {
  const [deck, setDeck] = useState({
    id: null,
    cardList: [],
    index: 0,
    mode: "default",
  });
  const length = deck.cardList.length;

  const setCardList = (cardList) => setDeck({ ...deck, cardList });
  const setIndex = (index) => setDeck((prev) => ({ ...prev, index }));
  const setId = (id) => setDeck({ ...deck, id });

  const setMode = {
    practice: () => setDeck({ ...deck, mode: "practicing" }),
    edit: () => setDeck({ ...deck, mode: "editing" }),
    inspect: () => setDeck({ ...deck, mode: "inspecting" }),
    finished: () => setDeck({ ...deck, mode: "finished" }),
    default: () => setDeck({ ...deck, mode: "default" }),
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
    setIndex(newIndex);
  };

  const isFinished = () => {
    const index = deck.index;
    if (index >= length) {
      setMode.finished();
      setIndex(0);
      return true;
    } else {
      return false;
    }
  };

  return {
    id: deck.id,
    mode: deck.mode,
    length,
    setCardList,
    setMode,
    getCard,
    setId,

    drawNextCard, //this should probably be owned by the context
  };
};
