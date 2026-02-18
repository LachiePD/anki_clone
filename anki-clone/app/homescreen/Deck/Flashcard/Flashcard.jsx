import { useState } from "react";

const Flashcard = ({ data , handleChangeCard}) => {
  const [isRevealed, setRevealed] = useState(false);
  const { front, back } = data || {};
  return (
    <div>
      
      {!isRevealed && (
        <>
          {front}
          <button onClick={() => setRevealed(true)}>Answer Button</button>
        </>
      )}
       
      {isRevealed && (
        <>
          {back}

          <button onClick={() => setRevealed(false)}>incorrect</button>

	      <button onClick={handleChangeCard}>
	      Correct
	      </button>
        </>
      )}
      
    </div>
  );
};

export default Flashcard;
