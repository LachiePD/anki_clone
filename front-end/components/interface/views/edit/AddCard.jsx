import { useState } from "react";
import { useActiveDeck, useApi } from "@/providers/index.mjs";
//TODO, should this just be a form?
export const AddCard = ({ toggleAddingCard }) => {
  const [content, setContent] = useState({ front: "", back: "" });
  const { actions, deckId } = useActiveDeck();
  const api = useApi();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.card.newCard({ card: content, deckId });
    actions.refresh(); //TODO, this method should say its refreshing the deck
    toggleAddingCard();
  };
  return (
    <form>
      <div>
        <label>Front:</label>
        <input
          name="front"
          onChange={handleChange}
          type="text"
          value={content.front}
        />
      </div>

      <div>
        <label>Back:</label>
        <input
          type="text"
          name="back"
          onChange={handleChange}
          value={content.back}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
