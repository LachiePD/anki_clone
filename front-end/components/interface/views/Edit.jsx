"use client";
import { useState } from "react";
import { AddCard } from "./AddCard";
export const Edit = () => {
  const [addingCard, setAddingCard] = useState(false);
  const toggleAddingCard = () => {
    setAddingCard((prev) => !prev);
  };
  return (
    <>
      {!addingCard && (
        <>
          <button onClick={toggleAddingCard}>Add Card</button>
          <button>Change Deck Name</button>
        </>
      )}
      {addingCard && <AddCard toggleAddingCard={toggleAddingCard} />}
    </>
  );
};
