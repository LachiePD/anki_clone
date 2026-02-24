"use client";
import { useActiveDeck } from "../providers/ActiveDeckProvider.jsx";
import { Practice } from "./Practice.jsx";
import { Inspect } from "./Inspect.jsx";

export const DeckController = () => {
  const activeDeck = useActiveDeck();

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
