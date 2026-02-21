"use client";

import { useMeatball } from "./useMeatball.jsx";
import List from "./List.jsx";

const MeatBallMenu = ({ id, children }) => {
  const logic = useMeatball();

  return (
    <div id={id}
	  ref={logic.menuRef}>
      <button onClick={logic.setActive}>Meat</button>
      {logic.active && <List>{children}</List>}
    </div>
  );
};

export default MeatBallMenu;
