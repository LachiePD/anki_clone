import { NavItem } from "./NavItem.jsx";
import { Subheader } from "@/components/index.mjs";
import { useDeckList, useActiveDeck } from "./useDeckList.jsx";
export const Sidebar = () => {
  const deckList = useDeckList();
  const { deck: activeDeck, updateDeck } = useActiveDeck();

  const renderDecks = () => {
    return deckList.decks.map((deck) => (
      <li key={deck.id}>
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
