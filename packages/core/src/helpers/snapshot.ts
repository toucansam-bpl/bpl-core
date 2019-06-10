import { app } from "@toucansam-bpl/core-container";
import { Container } from "@toucansam-bpl/core-interfaces";

// tslint:disable-next-line:no-var-requires
const { version } = require("../../package.json");

export async function setUpLite(options): Promise<Container.IContainer> {
    await app.setUp(version, options, {
        include: [
            "@toucansam-bpl/core-event-emitter",
            "@toucansam-bpl/core-logger-pino",
            "@toucansam-bpl/core-database-postgres",
            "@toucansam-bpl/core-snapshots",
        ],
    });

    return app;
}
