import NavItem from "./NavItem.jsx";
import Subheader from "@/components/headers/Subheader.jsx";

import { useDeckList } from "../DeckListContext.jsx";
const SideBar = () => {
  const deckList = useDeckList();

  const renderDecks = () => {
    return deckList.decks.map((deck) => (
      <li key={deck.id}>
        <NavItem
          deckSelectionEvent={deckList.actions.selectDeckById}
          handleDelete={deckList.actions.removeDeck}
          data={deck}
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
