import { request } from "./request";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const login = (payload) =>
  request(`/login`, { method: "POST", body: JSON.stringify(payload) });

const createUser = (payload) =>
  request("/registerUser", { method: "POST", body: JSON.stringify(payload) });

export const auth = { login, createUser };
