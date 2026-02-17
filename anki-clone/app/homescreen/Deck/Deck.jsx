"use client";
import { useState, useEffect } from "react";
import { useDeckMode } from "./useDeckMode.jsx";
import { useCardList } from "./useCardList.jsx";

import Practice from './Practice.jsx';
import Editor from "./Editor.jsx";
import Flashcard from './Card/Flashcard.jsx';

const Deck = ({ deckInfo }) => {
  const { cardList, setCardList, handleNewCard } = useCardList(deckInfo);
  const { mode, startPractice, startEditing, stopEverything } = useDeckMode({
    deckInfo,
  });


  return (
    <div>
      {mode === "editing" && (
        <Editor cardList={cardList} handleNewCard={handleNewCard} />
      )}
      {mode === "practicing" && (
	      <Practice cardList={cardList}/>
      )}
    </div>
  );
};

export default Deck;
