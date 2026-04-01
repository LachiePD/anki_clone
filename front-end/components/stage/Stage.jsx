import { useActiveDeck } from "@/providers/index.mjs";
import { Practice } from "./views/Practice";
import { Edit } from "./views/Edit";
import { Finished } from "./views/Finished";
import { Default } from "./views/Default.jsx";
export const Stage = () => {
  const { deck } = useActiveDeck();
  console.log(deck.mode);
  const MODES = {
    practice: <Practice />,
    edit: <Edit />,
    default: <Default />,
    finished: <Finished />,
  };
  return <div>{MODES[deck.mode]}</div>;
};
