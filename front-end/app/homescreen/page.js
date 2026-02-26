"use client";
import {
  useActiveDeck,
  DeckController,
  Stage,
  Interface,
} from "@/features/deck/index.js";
import { Card } from "@/components/ui/Card.jsx";
import SideBar from "@/features/Sidebar.jsx";
import { useAuth } from "@/features/auth/index";

const page = () => {
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
        <Stage />

        <Interface />
      </section>
    </main>
  );
};

export default page;
