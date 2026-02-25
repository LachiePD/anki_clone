const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import { MOCK_DECKS } from "../mockData.js";
export const submitNewDeck = async (deckName) => {
  const response = await fetch(`${apiUrl}/createdeck`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ deckName }),
  });
  const data = await response.json();
  if (!response.ok) {
    return {
      error: data.error || "Something went wrong in submitNewDeck api call",
    };
  }
  return data;
};

export const getAllDecks = async () => {
  const result = await fetch(`${apiUrl}/getAllDecks`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await result.json();
  if (!result.ok) {
    return { error: data.error || "Something went wrong in getDecks api call" };
  }
  return data;
};

export const removeDeck = async (deckId) => {
  const result = await fetch(
    `${apiUrl}/removeDeck/${encodeURIComponent(deckId)}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
  );
  const data = await result.json();
  if (!result.ok) {
    console.log(data);
    return { error: data.error };
  }
  return data;
};
export const deck = { removeDeck, getAllDecks, submitNewDeck };
