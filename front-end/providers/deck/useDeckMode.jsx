"use client";

import { useState, useEffect } from "react";

export const useDeckMode = () => {
  const [currentMode, setCurrentMode] = useState("default");

  const setMode = {
    practice: () => setCurrentMode("practicing"),
    edit: () => setCurrentMode("editing"),
    inspect: () => setCurrentMode("inspecting"),
    finished: () => setCurrentMode("finished"),
  };

  return {
    currentMode,
    setMode,
  };
};
