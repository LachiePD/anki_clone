"use client";
import { Card } from "@/components/ui/Card";
import { Creator, Practice, Edit, Default, Finished } from "./views/index.mjs";
import { useActiveDeck } from "@/providers/index.mjs";
import { Reset } from "./Reset.jsx";
export const Interface = () => {
  const { deck } = useActiveDeck();

  const chooseMode = {
    practice: <Practice />,
    edit: <Edit />,
    finished: <Finished />,
    creator: <Creator />,
    default: <Default />,
  };

  return (
    <Card className="grid grid-cols-3 items-center p-4">
      <div className="flex justify-center gap-5">
        {!deck.id && <Creator />}
        {deck.id && chooseMode[deck.mode]}
      </div>

      <div className="flex justify-end">
        <Reset />
      </div>
    </Card>
  );
};
