import { useState } from "react";
import { useActiveDeck } from "@/features/deck/index";
import { useApi } from "@/features/api/index";

export const AddCard = ({ toggleAddingCard }) => {
  const [content, setContent] = useState({ front: "", back: "" });
  const activeDeck = useActiveDeck();
  const api = useApi();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.card.newCard(content);
    activeDeck.actions.refresh();
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
