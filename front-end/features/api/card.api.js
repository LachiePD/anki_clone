import {MOCK_CARDS} from './mockData.js';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchByDeck = async (id) => {

  const response = await fetch(
    `${apiUrl}/fetchCardsForDeck?id=${id}`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    },
  );

	
  const data = await response.json();
  return data;
};

export const createNewCard = async (deckId, card) => {
  const response = await fetch(`${apiUrl}/createNewCard`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deckId, card }),
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      error: data.error || "Something went wrong in createNewCard api call",
    };
  }
  return data;
};
