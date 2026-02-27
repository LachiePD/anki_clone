import NavItem from "./NavItem.jsx";
import Subheader from "@/components/headers/Subheader.jsx";
import { useDeckList, useActiveDeck } from "@/features/deck/index.js";

const SideBar = () => {
  const deckList = useDeckList();
  const activeDeck = useActiveDeck();
  const renderDecks = () => {
    return deckList.decks.map((deck) => (
      <li key={deck.id}>
        <NavItem
          //TODO these context methods shouldnt be injected
          deckSelectionEvent={() => activeDeck.actions.selectDeckById(deck.id)}
          handleDelete={deckList.actions.removeDeck}
          deck={deck}
        />
      </li>
    ));
  };
  return (
    <nav className={" bg-secondary p-4 min-w-76"}>
      <Subheader>Library</Subheader>
      <ul>{renderDecks()}</ul>
    </nav>
  );
};

export default SideBar;
