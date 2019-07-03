import { app } from "@blockpool-io/core-container";
import { Container } from "@blockpool-io/core-interfaces";

// tslint:disable-next-line:no-var-requires
const { version } = require("../../package.json");

export async function setUpLite(options): Promise<Container.IContainer> {
    await app.setUp(version, options, {
        include: [
            "@blockpool-io/core-event-emitter",
            "@blockpool-io/core-logger-pino",
            "@blockpool-io/core-database-postgres",
            "@blockpool-io/core-snapshots",
        ],
    });

    return app;
}
