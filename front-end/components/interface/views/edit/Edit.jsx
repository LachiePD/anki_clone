"use client";
import { useState } from "react";
import { AddCardForm } from "./AddCardForm.jsx";
export const Edit = () => {
  const [addingCard, setAddingCard] = useState(false);
  return (
    <>
      {!addingCard && (
        <>
          <button onClick={() => setAddingCard(true)}>Add Card</button>
          <button>Change Deck Name</button>
        </>
      )}
      {addingCard && <AddCardForm setAddingCard={setAddingCard} />}
    </>
  );
};
