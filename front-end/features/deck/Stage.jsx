import { Card } from "@/components/ui/Card";
import { useActiveDeck } from "./providers/ActiveDeckProvider";
import { Inspect } from "./views/Inspect";
import { Practice } from "./views/Practice";
export const Stage = () => {
  const activeDeck = useActiveDeck();

  const renderMode = () => {
    switch (activeDeck.mode.currentMode) {
      case "practicing":
        return <Practice />;

      case "editing":
        return <p>"We are Editing"</p>;

      case "inspecting":
        return <Inspect />;
    }
  };
  return <div>{renderMode()}</div>;
};
