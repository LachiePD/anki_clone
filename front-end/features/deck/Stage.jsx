import { Card } from "@/components/ui/Card";
import { DeckController } from "./views/DeckController";
import { useActiveDeck } from "./providers/ActiveDeckProvider";

export const Stage = () => {
  const activeDeck = useActiveDeck();
  return (
    <Card>
      <DeckController />
    </Card>
  );
};
