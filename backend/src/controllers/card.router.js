import express from "express";

const assertData = (...data) => {
  const items = data.flat();
  items.forEach((item) => {
    if (!item) {
      throw new Error(`Assert data failed in cardRouter ${item}`);
    }
  });
  return;
};

const cardRouter = ({ cardServices, authMiddleware }) => {
  const router = express.Router();

  router.get("/fetchCardsForDeck", authMiddleware, async (req, res) => {
    const id = Number(req.query.id);
	  console.log(id);
    assertData(id);

    const response = await cardServices.fetchCardsForDeck(id);

    return res
      .status(200)
      .json({ cards: response, message: "cards delivered" });
  });

  router.post("/createNewCard", authMiddleware, async (req, res) => {
    const deckId = req.body.deckId;
    const card = req.body.card;
    const userId = req.userId
    assertData([deckId, card, userId]);

    const response = await cardServices.createNewCard({ deckId, userId, card });
    return res.status(200).json({ response, message: "card created" });
  });
  return router;
};

export default cardRouter;
