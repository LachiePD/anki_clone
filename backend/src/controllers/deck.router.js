import express from "express";

const deckRouter = ({ deckServices, authMiddleware }) => {
  const router = express.Router();

  router.post("/createDeck", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const deckName = req.body.deckName;

    const response = await deckServices.createDeck({ deckName, userId });

    if (!response) {
      throw new Error("No response from deck services, in /createDeck");
    }

    return res.status(201).json({ message: "Deck created" });
  });

  router.get("/getAllDecks", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const response = await deckServices.getAllDecks({ userId });
    if (!response) {
      throw new Error("Cant get All Decks");
    }
    return res.status(200).json({ response, message: "List of decks" });
  });

  router.delete("/removeDeck/:deckId", authMiddleware, async (req, res) => {
    const { deckId } = req.params;
    const userId = req.userId;
    const response = await deckServices.removeDeck({ deckId, userId });

    return res.status(200).json({ response, message: "Deck removed" });
  });

  return router;
};
export default deckRouter;
