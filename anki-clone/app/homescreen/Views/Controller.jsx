"use client";
import { useState, useEffect } from "react";
import { useDeckMode } from "./useDeckMode.jsx";
import { useActiveDeck } from "./useActiveDeck.jsx";
import { useDeckList } from "../DeckListContext.jsx";
import Practice from "./Practice.jsx";
import Editor from "./Editor.jsx";
import Inspect from "./Inspect.jsx";

const Controller = () => {
  const { selectedDeck } = useDeckList();
  const activeDeck = useActiveDeck(selectedDeck);
  const mode = useDeckMode();

  const renderMode = () => {
    switch (mode.current) {
      case "practicing":
        return (
          <Practice modeActions={mode.actions} cardList={activeDeck.cardList} />
        );

      case "editing":
        return (
          <Editor
            handleNewFlashcard={activeDeck.handleNewcard}
            startPractice={mode.actions.startPractice}
            cardList={activeDeck.cardList}
          />
        );

      case "inspecting":
        return <Inspect modeActions={mode.actions} />;
    }
  };
  return <div>{renderMode()}</div>;
};

export default Controller;
