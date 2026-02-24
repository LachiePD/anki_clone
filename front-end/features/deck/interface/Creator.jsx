"use client";
import { useState } from "react";
import { useDeckList } from "../providers/DeckListContext.jsx";
import Card from "@/components/ui/Card.jsx";

export const Creator = ({ createNewDeck }) => {
  const [deckName, setDeckName] = useState("");
  const deckList = useDeckList();

  const handleChange = (e) => {
    setDeckName(e.target.value);
  };

  const handleSubmit = async () => {
    await deckList.actions.createNewDeck(deckName);
    setDeckName("");
  };
  return (
    <form className={"flex flex-col flex-1 "}>
      <textarea
        className={"  h-[30%] focus:outline-none focus:ring-0 resize-none"}
        onChange={handleChange}
        placeholder={"name of deck..."}
        value={deckName}
      />
      <button type={"submit"} onClick={handleSubmit} className={"button"}>
        submit
      </button>
    </form>
  );
};
