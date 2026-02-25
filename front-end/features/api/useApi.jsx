import { useState } from "react";
import { attemptLogin } from "./auth.api.js";

export const useApi = ({ route }) => {
  const [response, setResponse] = useState(null);
};
