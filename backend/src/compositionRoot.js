import path from "path";
import dotenv from "dotenv";

if (!process.env.NODE_ENV) {
  dotenv.config({
    path: path.resolve(process.cwd(), ".env"),
  });
}
import DatabaseConnection from "./infrastructure/DatabaseConnection.js";
import repositoryFactory from "./factories/repository.factory.js";
import serviceFactory from "./factories/service.factory.js";
import routerFactory from "./factories/router.factory.js";
import Server from "./Server.js";

const databaseConnection = new DatabaseConnection();
const repositories = repositoryFactory({ databaseConnection });
const services = serviceFactory({ repositories });
const routers = routerFactory({ services });

const server = new Server({ routers });
server.start();
