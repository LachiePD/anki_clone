import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "@/app/LoadingContext.js";
import DeckLink from "./DeckLink.jsx";

//com`
const Library = ({
  deckList,
  setDeckList,
  setSelectedDeck,
  deckSelectionEvent,
  removeDeck,
}) => {
  const [error, setError] = useState(null);
  const { loading, setLoading } = useContext(LoadingContext);

	console.log(deckList);
  const buildDecks = () => {
    return deckList.map((deck) => {
      return (
        <DeckLink
          deckSelectionEvent={deckSelectionEvent}
          handleDelete={removeDeck}
          key={deck.id}
          data={deck}
        />
      );
    });
  };

  const handleDelete = (deckId) => {
    removeDeck(deckId);
  };
  return (
    <div>
      {error && <p> ERROR: {error}</p>}
      {buildDecks()}
    </div>
  );
};

export default Library;
