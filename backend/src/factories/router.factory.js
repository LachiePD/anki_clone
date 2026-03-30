import userRouter from "../controllers/user.router.js";
import authRouter from "../controllers/auth.router.js";
import deckRouter from "../controllers/deck.router.js";
import cardRouter from "../controllers/card.router.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const routerFactory = ({ services }) => {
  const userRouterInstance = userRouter({
    userServices: services.userServices,
  });
  const authRouterInstance = authRouter({
    authServices: services.authServices,
  });
  const deckRouterInstance = deckRouter({
    deckServices: services.deckServices,
    authMiddleware,
  });

  const cardRouterInstance = cardRouter({
    cardServices: services.cardServices,
    authMiddleware,
  });
  return {
    userRouterInstance,
    authRouterInstance,
    deckRouterInstance,
    cardRouterInstance,
  };
};

export default routerFactory;
