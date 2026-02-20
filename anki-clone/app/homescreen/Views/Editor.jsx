import { useState } from "react";
import SubmitButton from "@/components/SubmitButton.jsx";
import { useCardList } from "./useCardList.jsx";

const Editor = ({ startPractice }) => {
  const { cardList, handleNewFlashcard } = useCardList();

  //TODO join this state into one. will need to check the handleNewFlashcard call will work after.
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleSubmit = async () => {
    const card = { front, back };
    const response = await handleNewFlashcard(card);

    setFront("");
    setBack("");
  };
  const handleChange = (e, state) => {
    //TODO this switch needs to be made cleaner, do it once the component state looks like [cardData, setCardData] = useState({front:"", back:""})
    switch (state) {
      case "front":
        setFront(e.target.value);
        return;
      case "back":
        setBack(e.target.value);
        return;
      default:
        return;
    }
  };
  return (
    <div>
      <textarea
        placeholder={"question"}
        value={front}
        onChange={(e) => handleChange(e, "front")}
      />

      <textarea
        value={back}
        placeholder={"answer"}
        onChange={(e) => handleChange(e, "back")}
      />

      <SubmitButton onClick={handleSubmit} />

      <br />
      <button onClick={startPractice}>Go to practice</button>
    </div>
  );
};

export default Editor;
