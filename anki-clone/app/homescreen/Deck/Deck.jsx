"use client";
import { useState, useEffect } from "react";
import { useDeckMode } from "./useDeckMode.jsx";
import { useCardList } from "./useCardList.jsx";
import Practice from "./Practice.jsx";
import Editor from "./Editor.jsx";
import Inspect from "./Inspect.jsx";

const Deck = ({ deckInfo }) => {
  const { cardList, setCardList, handleNewCard } = useCardList(deckInfo);
  const { mode, actions: modeActions } = useDeckMode();

  return (
    <div>
      {mode === "editing" && (
        <Editor
          cardList={cardList}
          handleNewCard={handleNewCard}
          modeActions={modeActions}
        />
      )}
      {mode === "practicing" && (
        <Practice
          key={deckInfo.id}
          cardList={cardList}
          modeActions={modeActions}
        />
      )}

      {mode === "inspecting" && (
        <Inspect
          key={deckInfo.id}
          modeActions={modeActions}
          cardList={cardList}
        />
      )}
    </div>
  );
};

export default Deck;
