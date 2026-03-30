"use client";

import { useState, useEffect } from "react";

export const useDeckMode = () => {
  const [currentMode, setCurrentMode] = useState("default");

  const startPractice = () => setCurrentMode("practicing");
  const startEditing = () => setCurrentMode("editing");
  const startInspecting = () => setCurrentMode("inspecting");
  const setFinished = () => setCurrentMode("finished");

  return {
    currentMode,
    actions: {
      startPractice,
      startEditing,
      startInspecting,
      setFinished,
    },
  };
};
