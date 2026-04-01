import { useActiveDeck } from "@/providers/index.mjs";
import { Practice } from "./views/Practice";
import { Edit } from "./views/Edit";
import { Finished } from "./views/Finished";
import { Default } from "./views/Default.jsx";
export const Stage = () => {
  const { deck } = useActiveDeck();
  const MODES = {
    practicing: <Practice />,
    editing: <Edit />,
    default: <Default />,
    finished: <Finished />,
  };
  return <div>{MODES[deck.mode]}</div>;
};
