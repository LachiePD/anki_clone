import { request } from "./request.js";

const fetchByDeck = (queryParam) =>
  request(`/fetchCardsForDeck?id=${queryParam}`, {
    method: "GET",
  });

const newCard = (payload) =>
  request(`/createNewCard`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const card = { newCard, fetchByDeck };
