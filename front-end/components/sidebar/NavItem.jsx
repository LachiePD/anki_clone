import { MeatballMenu } from "@/components/index.mjs";
import { useActiveDeck } from "@/providers/index.mjs";
export const NavItem = ({ deck, handleDelete, deckSelectionEvent }) => {
  const { updateDeck } = useActiveDeck();
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
          onClick={() =>
            updateDeck({ mode: "default", id: deck.id, name: deck.name })
          }
        >
          Select
        </button>
      </MeatballMenu>
    </div>
  );
};
