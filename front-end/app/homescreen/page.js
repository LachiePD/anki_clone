"use client";
import { Card, Sidebar, Interface, Stage } from "@/components/index.mjs";
import { useAuth, useActiveDeck } from "@/providers/index.mjs";

const page = () => {
  return (
    <main className={"flex w-full"}>
      <Sidebar />
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
