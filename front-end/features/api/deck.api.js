const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
  return data;
};

export const getDecks = async () => {
  const result = await fetch(`${apiUrl}/getAllDecks`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await result.json();
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
  return data;
};
export const deck = { removeDeck, getDecks, submitNewDeck };
