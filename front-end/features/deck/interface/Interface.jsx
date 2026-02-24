import { Card } from "@/components/ui/Card";
import { Creator } from "./Creator";
import { useFlashcard } from "@/features/flashcard/index";
import { useActiveDeck } from "../providers/ActiveDeckProvider";
import { Practice } from "./Practice";
export const Interface = () => {
  const activeDeck = useActiveDeck();
  const flashcard = useFlashcard();

  const modeMenu = () => {
    return (
      <>
        <button onClick={activeDeck.mode.actions.startPractice}>
          Go to practice
        </button>

        <button
          className={"button"}
          onClick={activeDeck.mode.actions.startEditing}
        >
          Edit
        </button>
      </>
    );
  };
  const chooseOutput = () => {
    if (activeDeck.mode.currentMode === "practice") {
      return <Practice />;
    }
  };

  return (
    <Card className={"flex-row  items-end"}>
      {!activeDeck.deckId && <Creator />}

      {activeDeck.deckId && modeMenu()}
    </Card>
  );
};
