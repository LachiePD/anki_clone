import MeatballMenu from "@/components/MeatballMenu/MeatballMenu.jsx";
const NavItem = ({ data, handleDelete, deckSelectionEvent }) => {
  return (
    <div className={"border border-black p-5 m-5"}>
      {data.id}
      <br />
      {data.name}
      <br />
      <MeatballMenu id={data.id}>
        <button
          onClick={() => handleDelete(data.id)}
          className={"border border-red-200 cursor-pointer"}
        >
          Delete
        </button>

        <button
          className={"border border-green-500 cursor-pointer"}
          onClick={() => deckSelectionEvent(data.id)}
        >
          Select
        </button>
      </MeatballMenu>
    </div>
  );
};

export default NavItem;

