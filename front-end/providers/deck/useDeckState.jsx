import { useState } from "react";
export const useDeckState = () => {
  const [deck, setDeck] = useState({
    id: null,
    cardList: [],
    index: 0,
    mode: "default",
  });
  const deckLength = deck.cardList.length;

  const validModes = ["practice", "edit", "inspect", "finished", "default"];

  const assertMode = (mode) => {
    if (!validModes.includes(mode))
      throw new Error("Invalid mode trying to be set");
  };
  const updateDeck = (update) => {
    if (Object.keys(update).includes("mode")) {
      assertMode(update.mode);
    } //this should just be login in assert()
    console.log(update);
    setDeck((prev) => ({ ...prev, ...update }));
  };

  const increment = () => {
    const newIndex = 1 + deck.index;
    updateDeck({ index: newIndex });
  };
  const isFinished = () => deck.index >= deck.length;

  const finishDeck = () => {
    updateDeck({ mode: "finished", index: 0 });
  };

  return {
    deck,
    updateDeck,
    deckLength,
    increment,
  };
};
