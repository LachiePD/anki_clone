import express from "express";

const assertData = (data) => {
  const keys = Object.keys(data);
  keys.forEach((key) => {
    if (!data[key]) {
      throw new Error(`Data missing in cardRouter call ${key}`);
    }
  });
  return;
};

const cardRouter = ({ cardServices, authMiddleware }) => {
  const router = express.Router();

  router.get("/fetchCardsForDeck", authMiddleware, async (req, res) => {
    const deckId = Number(req.query.id);
    assertData({ deckId });

    const response = await cardServices.fetchCardsForDeck(deckId);

    return res
      .status(200)
      .json({ cards: response, message: "cards delivered" });
  });

  router.post("/createNewCard", authMiddleware, async (req, res) => {
    const deckId = req.body.deckId;
    const card = req.body.card;
    const userId = req.userId;
    assertData({ deckId, card, userId });

    const response = await cardServices.createNewCard({ deckId, userId, card });
    return res.status(200).json({ response, message: "card created" });
  });
  return router;
};

export default cardRouter;
