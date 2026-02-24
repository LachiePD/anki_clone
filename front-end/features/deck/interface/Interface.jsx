import { Card } from "@/components/ui/Card";
import { Creator } from "./Creator";
import { useActiveDeck } from "../providers/ActiveDeckProvider";
import { Practice } from "./Practice";
import { ModeMenu } from "./ModeMenu";
export const Interface = ({ activeCard }) => {
  const activeDeck = useActiveDeck();

  const decideOutput = () => {
    switch (activeDeck.mode.currentMode) {
      case "inspecting":
        return <ModeMenu />;
      case "practice":
        return <Practice />;
    }
  };
  const chooseOutput = () => {
    if (activeDeck.mode.currentMode === "practice") {
      return <Practice />;
    }
  };

  return (
    <Card className={"flex-row  items-end"}>
      {!activeDeck.deckId && <Creator />}

      {activeDeck.deckId && decideOutput()}
    </Card>
  );
};
