//TODO , should this really be called NavItem?

import MeatballMenu from "@/components/MeatballMenu/MeatballMenu.jsx";
//TODO, data is bad name okay?
const NavItem = ({ data, handleDelete, deckSelectionEvent }) => {
  return (
    <div className={"flex justify-between p-4 hover:bg-secondary-dark rounded-4xl"}>
      {data.name}
      <MeatballMenu id={data.id}>
        <button
          onClick={() => handleDelete(data.id)}
          className={"button"}
        >
          Delete
        </button>

        <button
          className={"button"}
          onClick={() => deckSelectionEvent(data.id)}
        >
          Select
        </button>
      </MeatballMenu>
    </div>
  );
};

export default NavItem;
