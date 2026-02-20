import NavItem from "./NavItem.jsx";
import { useDeckList } from "../DeckListContext.jsx";

const SideBar = () => {
  const deckList = useDeckList();
  return (
    <div className={" bg-secondary"}>
      {deckList.decks.map((deck) => (
        <NavItem
          deckSelectionEvent={deckList.actions.selectDeckById}
          handleDelete={deckList.actions.removeDeck}
          key={deck.id}
          data={deck}
        />
      ))}
    </div>
  );
};

export default SideBar;
