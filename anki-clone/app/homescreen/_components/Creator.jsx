"use client";
import { useState } from "react";
import { useDeckList } from "../DeckListContext.jsx";

import Card from "@/components/Card.jsx";
const Creator = ({ createNewDeck }) => {
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
	  <form>
      <textarea
        className={"h-[30%]"}
        onChange={(e) => handleChange(e)}
        placeholder={"name of deck"}
        value={deckName}
      />
      <button
        type={"submit"}
        onClick={handleSubmit}
        className={"flex h-12 w-13 rounded-full border-3 border-blue-200"}
      >
        submit
      </button>
	  </form>
  );
};

export default Creator;
