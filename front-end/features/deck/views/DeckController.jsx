"use client";
import { useDeckMode } from "../hooks/useDeckMode.jsx";
import { useActiveDeck } from "../providers/ActiveDeckProvider.jsx";
import { useDeckList } from "../providers/DeckListContext.jsx";
import { Practice } from "./Practice.jsx";
import { Editor } from "./Editor.jsx";
import { Inspect } from "./Inspect.jsx";

export const DeckController = () => {
  const activeDeck = useActiveDeck();
  const mode = activeDeck.mode;

  const renderMode = () => {
    switch (mode.currentMode) {
      case "practicing":
        return <Practice modeActions={mode.actions} />;

      case "editing":
        return (
          <Editor
            handleNewFlashcard={activeDeck.handleNewcard}
            startPractice={mode.actions.startPractice}
          />
        );

      case "inspecting":
        return <Inspect modeActions={mode.actions} />;
    }
  };
  return <div>{renderMode()}</div>;
};
