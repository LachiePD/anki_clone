import { NavItem } from "./NavItem.jsx";
import { Subheader } from "@/components/index.mjs";
import { useDeckList, useActiveDeck } from "@/providers/index.mjs";
export const Sidebar = () => {
  const deckList = useDeckList();
  const { deck: activeDeck, updateDeck } = useActiveDeck();

  const renderDecks = () => {
    return deckList.decks.map((deck, index) => (
      <li key={deck.id || index}>
        <NavItem handleDelete={deckList.actions.removeDeck} deck={deck} />
      </li>
    ));
  };
  return (
    <nav className={" bg-secondary p-4 min-w-76"}>
      <Subheader>Deck List</Subheader>
      <ul>{renderDecks()}</ul>
    </nav>
  );
};
