import { createServer, mountServer } from "@blockpool-io/core-http-utils";
import { apolloServer } from "./apollo-server";

export async function startServer(config) {
    const app = await createServer({
        host: config.host,
        port: config.port,
    });

    await apolloServer.applyMiddleware({
        app,
        path: config.path,
    });

    await apolloServer.installSubscriptionHandlers(app.listener);

    return mountServer("GraphQL", app);
}
