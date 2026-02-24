"use client";
import { useDeckMode } from "../hooks/useDeckMode.jsx";
import { useActiveDeck } from "../providers/ActiveDeckProvider.jsx";
import { useDeckList } from "../providers/DeckListContext.jsx";
import { Practice } from "./Practice.jsx";
import { Inspect } from "./Inspect.jsx";

export const DeckController = () => {
  const activeDeck = useActiveDeck();
  const mode = activeDeck.mode;

  const renderMode = () => {
    switch (mode.currentMode) {
      case "practicing":
        return <Practice />;

      case "editing":
        return <p>"We are Editing"</p>;

      case "inspecting":
        return <Inspect />;
    }
  };
  return <div>{renderMode()}</div>;
};
