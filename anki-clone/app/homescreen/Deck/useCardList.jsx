import { fetchByDeck, createNewCard } from "@/api/card.api.js";

import { useState, useEffect, useCallback } from "react";

export const useCardList = (deckInfo) => {
  const [cardList, setCardList] = useState([]);

  const [selectedCard, setSelectedCard] = useState(0);

  const fetchCards = useCallback(async () => {
    if (!deckInfo) return;
    const data = await fetchByDeck(deckInfo.id);
    setCardList(data.cards);
  }, [deckInfo.id]);

  useEffect(() => {
    if (!deckInfo.id) return;
    fetchCards();
  }, [fetchCards]);

  const handleNewCard = async (card) => {
    await createNewCard(deckInfo, card);
    fetchCards();
  };
  return { cardList, setCardList, handleNewCard };
};
