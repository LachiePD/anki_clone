import {MOCK_CARDS} from './mockData.js';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchByDeck = async (deckId) => {
	console.log('WE ARE IN DEV MODE, MOCK DATA BEING SENT FROM CARD.API.KS');
	return {cards:MOCK_CARDS , message: 'devMode'}

  const response = await fetch(
    `${apiUrl}/fetchCardsForDeck?deck_id=${deckId}`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    },
  );

	
  const data = await response.json();
  return data;
};

export const createNewCard = async (deckInfo, card) => {
  const response = await fetch(`${apiUrl}/createNewCard`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deckInfo, card }),
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      error: data.error || "Something went wrong in createNewCard api call",
    };
  }
  return data;
};
