"use client";

import { UserContext } from "../UserContext.js";
import { useContext, useState } from "react";
import { useDeckList } from "./useDeckList.jsx";
import Library from "./Library.jsx";
import SideBar from "./SideBar.js";
import Creator from "./Creator.jsx";
import Deck from "./Deck/Deck.jsx";

const Page = () => {
  const { user, setUser } = useContext(UserContext);
  const { deckList, selectedDeck, actions: deckListActions } = useDeckList();


  return (
    <div className={"flex bg-green-200 w-full h-screen p-4 flex-row wrap"}>
      <SideBar>
        <Library
          deckListActions={deckListActions}
          deckList={deckList}
        />
      </SideBar>
      <div className={"flex w-full flex-col h-full rounded  bg-purple-200 "}>
        <div
          className={"flex justify-center bg-blue-200   w-full h-30 mx-auto"}
        >
          <h1> my sticky brain :)</h1>
        </div>
        {selectedDeck ? (
          <Deck key={selectedDeck.id} deckInfo={selectedDeck} />
        ) : (
          <Creator createNewDeck={deckListActions.createNewDeck} />
        )}
      </div>
	    </div>
  );
};

export default Page;
