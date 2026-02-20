"use client";
import { useState, useEffect } from "react";
import { useDeckMode } from "./useDeckMode.jsx";
import { useCardList } from "./useCardList.jsx";
import { useDeckList } from "../DeckListContext.jsx";
import Practice from "./Practice.jsx";
import Editor from "./Editor.jsx";
import Inspect from "./Inspect.jsx";

const Controller = () => {
  //TODO have a look at making this const mode = useDeckMode(), i dont like giving actions an alias all the time;
  const { selectedDeck } = useDeckList();
  const mode = useDeckMode();
  const { cardList, handleNewFlashcard } = useCardList();

  useEffect(() => {
    mode.actions.startInspecting();
  }, [selectedDeck]);

  const renderMode = () => {
    switch (mode.current) {
      case "practicing":
        return <Practice modeActions={mode.Actions} cardList={cardList} />;

      case "editing":
        return (
          <Editor
            //TODO this part of the hook should probably be moved to useSelectedDeck() (handleNewFlashcard);
            handleNewFlashcard={handleNewFlashcard}
            startPractice={mode.actions}
            cardList={cardList}
          />
        );

      case "inspecting":
        return <Inspect modeActions={mode.actions} />;
    }
  };
  return <div>{renderMode()}</div>;
};

export default Controller;
