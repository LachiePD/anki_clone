import dotenv from "dotenv";
dotenv.config();
import DatabaseConnection from "./infrastructure/DatabaseConnection.js";
import repositoryFactory from "./factories/repository.factory.js";
import serviceFactory from "./factories/service.factory.js";
import routerFactory from "./factories/router.factory.js";
import Server from "./Server.js";


    const databaseConnection = new DatabaseConnection(); ///process env injected here
    const repositories = repositoryFactory({ databaseConnection });
    const services = serviceFactory({ repositories });
    const routers = routerFactory({ services });

   const server = new Server({ routers });
    server.start();

const shutdown = async () => {
    try {
        await databaseConnection.pool.end(); 
        console.log("🗄️ Database pool closed.");
    } catch (err) {
        console.error("Error during shutdown:", err);
    }
    process.exit(0);
};
process.on('SIGUSR2', async () => {
    await shutdown();
    process.kill(process.pid, 'SIGUSR2');
});
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
