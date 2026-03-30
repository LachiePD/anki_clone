import { request } from "./request";

const login = (payload) =>
  request(`/login`, { method: "POST", body: JSON.stringify(payload) });

const createUser = (payload) =>
  request("/registerUser", { method: "POST", body: JSON.stringify(payload) });

export const auth = { login, createUser };
