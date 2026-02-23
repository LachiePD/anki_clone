"use client";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useMeatball } from "./useMeatball.jsx";
import List from "@/components/ui/List.jsx";

export const MeatballMenu = ({ id, children }) => {
  const meatballService = useMeatball();
  //TODO clean up this rendering logic.
  //TODO ELLIPSIS component probably shouldnt have button behaviour
  return (
    <div id={id} ref={meatballService.menuRef}>
      {!meatballService.active && (
        <EllipsisHorizontalIcon
          onClick={meatballService.setActive}
          className={"icon"}
        />
      )}
	  {/*     //TODO list should be the children*/}
      {meatballService.active && <List>{children}</List>}
    </div>
  );
};
