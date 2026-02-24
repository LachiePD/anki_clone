import { Card } from "@/components/ui/Card";
import { useActiveDeck } from "../providers/ActiveDeckProvider";
import { Creator } from "./Creator";
import { DeckController } from "../views/DeckController";
export const Interface = () => {
  const activeDeck = useActiveDeck();
  return (
    <Card className={"flex-row  items-end"}>
      {!activeDeck.deckId && <Creator />}

      {activeDeck.deckId && <DeckController />}
    </Card>
  );
};
