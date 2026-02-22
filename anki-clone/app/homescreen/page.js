"use client";
import { useDeckList } from "./DeckListContext.jsx";
import Card from "@/components/Card.jsx";
import SideBar from "./_components/Sidebar.jsx";
import Creator from "./_components/Creator.jsx";
import DeckController from "./Views/DeckController.jsx";

const page = () => {
  const deckList = useDeckList();
  return (
    <main className={"flex w-full"}>
      <SideBar />
      <section className={" flex flex-1 flex-col min-h-screen p-5 bg-primary "}>
        //TODO , make a directive for section headers
        <header>
          <h1 className={"text-3xl "}>my sticky brain :)</h1>
        </header>
        <div
          className={"flex-1 flex justify-center  px-40 "}
        >
          <Card >{deckList.selectedDeck ? <DeckController key={deckList.selectedDeck.id}/> : <Creator />}</Card>
        </div>
      </section>
    </main>
  );
};

export default page;
