import { fetchByDeck, createNewCard } from "@/api/card.api.js";
import { useState, useEffect, useCallback } from "react";
import { useDeckList } from "../DeckListContext.jsx";

export const useActiveDeck = () => {

	//TODO change selectedCard to activeCard
  const deckList = useDeckList();
  const [cardList, setCardList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);

  const fetchCards = async () => {
    const data = await fetchByDeck(deckList.selectedDeck.id);
    setCardList(data.cards);
  };

  useEffect(() => {
    fetchCards();
  }, [deckList.selectedDeck]);

  const handleNewFlashcard = async (card) => {
    await createNewCard(deckList.selectedDeck, card);
    fetchCards();
  };
  return { cardList, setCardList, handleNewFlashcard };
};
