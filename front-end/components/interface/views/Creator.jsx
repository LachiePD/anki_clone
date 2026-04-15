"use client";
import { useState } from "react";
import { useDeckList } from "@/providers/index.mjs";
import { Card } from "@/components/index.mjs";

export const Creator = ({ createNewDeck }) => {
  const [deckName, setDeckName] = useState("");
  const deckList = useDeckList();

  const handleChange = (e) => {
    setDeckName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deckList.actions.createDeck(deckName);
    setDeckName("");
  };
  return (
    <form>
      <textarea
        className={"  w-full border border-secondary rounded   resize-none"}
        onChange={handleChange}
        placeholder={"name of deck..."}
        value={deckName}
      />
      <button type={"submit"} onClick={handleSubmit} className={"button"}>
        Create Deck!
      </button>
    </form>
  );
};
