import { app } from "@blockpool-io/core-container";

export const setUpLite = async options => {
    process.env.CORE_SKIP_BLOCKCHAIN = "true";

    await app.setUp("2.0.0", options, {
        include: [
            "@blockpool-io/core-logger",
            "@blockpool-io/core-logger-pino",
            "@blockpool-io/core-event-emitter",
            "@blockpool-io/core-snapshots",
        ],
    });

    return app;
};

export const tearDown = async () => app.tearDown();
