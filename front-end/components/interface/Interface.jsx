"use client";
import { useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Creator } from "./Creator";
import { useActiveDeck } from "@/providers/index.mjs";
import { Practice } from "./Practice";
import { Edit } from "./Edit";
import { ModeMenu } from "./ModeMenu";
import { Finished } from "./Finished";
export const Interface = () => {
  const activeDeck = useActiveDeck();

  const decideOutput = () => {
    switch (activeDeck.mode.currentMode) {
      case "inspecting":
        return <ModeMenu />;
      case "practicing":
        return <Practice />;
      case "editing":
        return <Edit />;
      case "finished":
        return <Finished />;
    }
  };

  return (
    <Card className={"flex-row  items-end"}>
      {!activeDeck.deckId && <Creator />}

      {activeDeck.deckId && decideOutput()}
    </Card>
  );
};
