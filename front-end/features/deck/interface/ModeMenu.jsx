import { useActiveDeck } from "../providers/ActiveDeckProvider";

export const ModeMenu = () => {
  const activeDeck = useActiveDeck();
  return (
    <>
      <button onClick={activeDeck.mode.actions.startPractice}>
        Go to practice
      </button>

      <button
        className={"button"}
        onClick={activeDeck.mode.actions.startEditing}
      >
        Edit
      </button>
    </>
  );
};
