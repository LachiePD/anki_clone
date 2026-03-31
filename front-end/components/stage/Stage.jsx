import { useActiveDeck } from "@/providers/index.mjs";
import { Inspect } from "./views/Inspect";
import { Practice } from "./views/Practice";
import { Edit } from "./views/Edit";
import { Finished } from "./views/Finished";
import { Default } from "./views/Default";
export const Stage = () => {
  const activeDeck = useActiveDeck();
  const MODES = {
    practicing: <Practice />,
    editing: <Edit />,
    inspecting: <Inspect />,
    finished: <Finished />,
  };
  return <div>{MODES[activeDeck.mode.currentMode] || <Default />}</div>;
};
