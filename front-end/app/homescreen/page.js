"use client";
import { useActiveDeck,  DeckController , Stage} from "@/features/deck/index.js";
import {Card} from "@/components/ui/Card.jsx";
import SideBar from "@/features/Sidebar.jsx";

const page = () => {
	const activeDeck = useActiveDeck();
  return (
    <main className={"flex w-full"}>
      <SideBar />
      <section
        className={
          " flex flex-1 flex-col min-h-screen p-5 justify-between bg-primary "
        }
      >
        <header className={"min-h-24"}>
          <h1 className={"text-3xl "}>my sticky brain :)</h1>
        </header>
        <Card className={"flex-row  items-end"}>
          {activeDeck.deckId ? (
            <DeckController key={activeDeck.deckId} />
          ) : (
            <Creator />
          )}
        </Card>
		<Stage/>
      </section>
    </main>
  );
};

export default page;
