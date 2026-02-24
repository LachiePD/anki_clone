import { Card } from "@/components/ui/Card";
import { useActiveDeck } from "../providers/ActiveDeckProvider";
import { Creator } from "./Creator";
import { DeckController } from "../views/DeckController";

import { useFlashcard } from "@/features/flashcard/index";
import { Practice } from "./Practice";
export const Interface = () => {
  const activeDeck = useActiveDeck();
  const flashcard = useFlashcard();

  const chooseOutput = () => {
    if (activeDeck.mode.currentMode === "practice") {
      return <Practice />;
    }
  };

  return (
    <Card className={"flex-row  items-end"}>
      {!activeDeck.deckId && <Creator />}

      {activeDeck.deckId && chooseOutput()}
    </Card>
  );
};
