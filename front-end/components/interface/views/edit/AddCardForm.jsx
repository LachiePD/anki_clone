import { useState } from "react";
import { useActiveDeck } from "@/providers/index.mjs";
export const AddCardForm = ({ setAddingCard }) => {
  const [content, setContent] = useState({ front: "", back: "" });
  const { addNewCard } = useActiveDeck();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCard({ ...content });
    setAddingCard(false);
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
