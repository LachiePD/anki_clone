import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "@/app/LoadingContext.js";
import DeckLink from "./DeckLink.jsx";

const Library = ({ deckList, deckListActions, deckSelectionEvent }) => {
  const [error, setError] = useState(null);
  const { loading, setLoading } = useContext(LoadingContext);

  const buildDecks = () => {
    return deckList.map((deck) => {
      return (
        <DeckLink
          deckSelectionEvent={deckSelectionEvent}
          handleDelete={deckListActions.removeDeck}
          key={deck.id}
          data={deck}
        />
      );
    });
  };

  return (
    <div>
      {error && <p> ERROR: {error}</p>}
      {buildDecks()}
    </div>
  );
};

export default Library;
