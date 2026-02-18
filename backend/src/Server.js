import errorMiddleware from "./middleware/error.middleware.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

class Server {
  constructor({ routers }) {
    this.routerFactory = routers;
    this.app = express();
    this.port = 9000;
  }

  start() {
    this.setup();
    this.app.listen(this.port, () => {
      console.log(`Server is truly ready on port ${this.port}`);
    });
  }

  setup() {
    this.app.use(cors({ origin: "http://localhost:3000", credentials: true }));
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use("/", this.routerFactory.userRouterInstance);
    this.app.use("/", this.routerFactory.authRouterInstance);
    this.app.use("/", this.routerFactory.deckRouterInstance);
    this.app.use("/", this.routerFactory.cardRouterInstance);
    this.app.use(errorMiddleware);
  }
}
export default Server;
