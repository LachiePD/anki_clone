export const useDeckState = () => {
  const [deck, setDeck] = useState({
    id: null,
    cardList: [],
    index: 0,
    mode: "Default",
  });

  const getId = () => deck.id;
  const getCardList = () => deck.cardList;
  const getIndex = () => deck.index;
  const getMode = () => deck.mode;

  const setIndex = (index) => setDeck({ ...deck, index });
  const setCardList = (cardList) => setDeck({ ...deck, cardList });

  const setMode = {
    practice: () => setDeck({ ...deck, mode: "practicing" }),
    edit: () => setDeck({ ...deck, mode: "editing" }),
    inspect: () => setDeck({ ...deck, mode: "inspecting" }),
    finished: () => setDeck({ ...deck, mode: "finished" }),
  };

  return { getId, getCardList, getIndex, setIndex, getMode, setMode };
};
