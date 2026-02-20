import { useState, useEffect } from "react";

export const useDeckMode = () => {
  const [current, setCurrent] = useState("inspecting");

  const startPractice = () => setCurrent("practicing");
  const startEditing = () => setCurrent("editing");
  const startInspecting = () => setCurrent("inspecting");

  const api = {
    current,
    actions: {
      startPractice: startPractice,
      startEditing: startEditing,
      startInspecting: startInspecting,
    },
  };

  return api;
};
