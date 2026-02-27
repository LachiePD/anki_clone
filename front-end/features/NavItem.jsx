import { MeatballMenu } from "@/features/meatball/index.js";

const NavItem = ({ deck, handleDelete, deckSelectionEvent }) => {
  return (
    <div
      className={"flex justify-between p-4 hover:bg-secondary-dark rounded-4xl"}
    >
      {deck.name}
      <MeatballMenu id={deck.id}>
        <button onClick={() => handleDelete(deck.id)} className={"button"}>
          Delete
        </button>

        <button
          className={"button"}
          onClick={() => deckSelectionEvent(deck.id)}
        >
          Select
        </button>
      </MeatballMenu>
    </div>
  );
};

export default NavItem;
