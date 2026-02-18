import { useState } from "react";

export const useDeckMode = () => {
  const [mode, setMode] = useState("inspecting");

  const startPractice = () => setMode("practicing");
  const startEditing = () => setMode("editing");
  const startInspecting = () => setMode("inspecting");

  const api = {
    mode,
    actions: {
      startPractice: startPractice,
      startEditing: startEditing,
      startInspecting: startInspecting,
    },
  };

  return api;
};
