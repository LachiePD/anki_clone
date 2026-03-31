import { DeckListProvider, ActiveDeckProvider } from "@/providers/index.mjs";
const HomescreenLayout = ({ children }) => {
  return (
    <DeckListProvider>
      <ActiveDeckProvider>{children}</ActiveDeckProvider>
    </DeckListProvider>
  );
};

export default HomescreenLayout;
