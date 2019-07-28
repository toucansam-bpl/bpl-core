import { app } from "@blockpool-io/core-container";
import { Container } from "@blockpool-io/core-interfaces";

// tslint:disable-next-line:no-var-requires
const { version } = require("../../package.json");

export const setUpLite = async (options): Promise<Container.IContainer> => {
    await app.setUp(version, options, {
        options: {
            "@blockpool-io/core-blockchain": { replay: true },
        },
        include: [
            "@blockpool-io/core-event-emitter",
            "@blockpool-io/core-logger-pino",
            "@blockpool-io/core-state",
            "@blockpool-io/core-database-postgres",
            "@blockpool-io/core-blockchain",
        ],
    });

    return app;
};
