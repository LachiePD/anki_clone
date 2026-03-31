"use client";
import { useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Creator, Practice, Edit, Default, Finished } from "./views/index.mjs";
import { useActiveDeck } from "@/providers/index.mjs";
export const Interface = () => {
  const { getMode, setMode, deckId } = useActiveDeck();

  const chooseMode = {
    practicing: <Practice />,
    editing: <Edit />,
    finished: <Finished />,
    inspecting: <Default />,
  };

  return (
    <Card className={"flex-row  items-end"}>
      {!deckId && <Creator />}

      {deckId && chooseMode[getMode]}
    </Card>
  );
};
