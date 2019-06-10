import { app } from "@toucansam-bpl/core-container";

export const setUpLite = async options => {
    process.env.CORE_SKIP_BLOCKCHAIN = "true";

    await app.setUp("2.0.0", options, {
        include: [
            "@toucansam-bpl/core-logger",
            "@toucansam-bpl/core-logger-pino",
            "@toucansam-bpl/core-event-emitter",
            "@toucansam-bpl/core-snapshots",
        ],
    });

    return app;
};

export const tearDown = async () => app.tearDown();
