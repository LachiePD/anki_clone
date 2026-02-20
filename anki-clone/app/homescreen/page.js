"use client";
import { useDeckList } from "./DeckListContext.jsx";
import SideBar from "./_components/Sidebar.jsx";
import Creator from "./_components/Creator.jsx";
import Controller from "./Views/Controller.jsx";

const page = () => {
  const deckList = useDeckList();
  return (
    <div className={"flex w-full   "}>
      <SideBar />
      <div className={" flex-1     p-5 bg-primary "}>
        <h1 className={"text-3xl"}>my sticky brain :)</h1>
        {deckList.selectedDeck ? <Controller /> : <Creator />}
      </div>
    </div>
  );
};

export default page;
