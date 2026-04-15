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
    <Card>
      {!deck.id ? <Creator /> : chooseMode[deck.mode]}
      <Reset />
    </Card>
  );
};
