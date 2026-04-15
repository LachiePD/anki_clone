import { useState, useRef, useEffect } from "react";

export const useSidebar = () => {
  const visibleRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const toggleVisible = () => setVisible((prev) => !prev);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (visibleRef.current && !visibleRef.current.contains(event.target)) {
      setVisible(false);
    }
  };

  return { visibleRef, toggleVisible, visible };
};
