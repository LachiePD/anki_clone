import { request } from "./request.js";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchByDeck = (queryParam) =>
  request(`${apiUrl}/fetchCardsForDeck?id=${queryParam}`, {
    method: "GET",
  });

const newCard = (payload) =>
  request(`${apiUrl}/createNewCard`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const card = { newCard, fetchByDeck };
