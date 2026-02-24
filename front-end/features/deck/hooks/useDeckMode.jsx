"use client";

import { useState, useEffect } from "react";

export const useDeckMode = () => {
  const [currentMode, setCurrentMode] = useState("inspecting");

  const startPractice = () => setCurrentMode("practicing");
  const startEditing = () => setCurrentMode("editing");
  const startInspecting = () => setCurrentMode("inspecting");

  return {
    currentMode,
    actions: {
      startPractice,
      startEditing,
      startInspecting,
    },
  };
};
