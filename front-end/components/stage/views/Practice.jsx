import { useActiveDeck } from "@/providers/index.mjs";
export const Practice = () => {
  const { card } = useActiveDeck();
  return <>'practice'</>;
};
