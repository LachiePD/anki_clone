const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function request(path, options = {}) {
  const response = await fetch(`${apiUrl}${path}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    ...options, // This lets us overwrite or add method/body
  });

  const data = await response.json();
  return { ...data, status: response.status };
}
export const getDecks = () => request("/getAllDecks", { method: "GET" });

export const removeDeck = (id) =>
  request(`/removeDeck/${encodeURIComponent(id)}`, { method: "DELETE" });

export const createDeck = (payload) =>
  request("/createDeck", {
    method: "POST",
    body: JSON.stringify(payload),
  });
export const deck = { getDecks, createDeck, removeDeck };
