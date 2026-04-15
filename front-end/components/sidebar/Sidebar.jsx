import { NavItem } from "./NavItem.jsx";
import { Subheader } from "@/components/index.mjs";
import { useDeckList, useActiveDeck } from "@/providers/index.mjs";
import { HamburgerBar } from "./HamburgerBar.jsx";
import { useSidebar } from "./useSidebar";
export const Sidebar = () => {
  const deckList = useDeckList();
  const { deck: activeDeck, updateDeck } = useActiveDeck();
  const { visibleRef, toggleVisible, visible } = useSidebar();

  //TODO this should be in useActiveDeck()?
  const renderDecks = () => {
    return deckList.decks.map((deck, index) => (
      <li key={deck.id || index}>
        <NavItem handleDelete={deckList.actions.removeDeck} deck={deck} />
      </li>
    ));
  };
  return (
    <>
      <HamburgerBar handleClick={toggleVisible} />

      <nav
        className={`
        fixed top-0 left-0 h-full  bg-secondary p-4
        transform transition-transform duration-300 ease-in-out
        ${visible ? "translate-x-0" : "-translate-x-full"}
      `}
        ref={visibleRef}
      >
        <Subheader>Deck List</Subheader>
        <ul>{renderDecks()}</ul>
      </nav>
    </>
  );
};
