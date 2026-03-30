import { request } from "./request";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getDecks = () => request("/getAllDecks", { method: "GET" });

const removeDeck = (id) =>
  request(`/removeDeck/${encodeURIComponent(id)}`, { method: "DELETE" });

const createDeck = (payload) =>
  request("/createDeck", {
    method: "POST",
    body: JSON.stringify(payload),
  });
export const deck = { getDecks, createDeck, removeDeck };
