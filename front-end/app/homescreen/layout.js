import {
  DeckListProvider,
  ActiveDeckProvider,
  ActiveCardProvider,
} from "@/providers/index.mjs";
const HomescreenLayout = ({ children }) => {
  return (
    <DeckListProvider>
      <ActiveDeckProvider>
        <ActiveCardProvider>{children}</ActiveCardProvider>
      </ActiveDeckProvider>
    </DeckListProvider>
  );
};

export default HomescreenLayout;
