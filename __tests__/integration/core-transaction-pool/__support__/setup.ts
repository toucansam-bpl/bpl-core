import { app } from "@blockpool-io/core-container";
import { registerWithContainer, setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(60000);

const options = {
    enabled: true,
    maxTransactionsPerSender: 300,
    allowedSenders: [],
    dynamicFees: {
        enabled: true,
        minFeePool: 1000,
        minFeeBroadcast: 1000,
        addonBytes: {
            transfer: 100,
            secondSignature: 250,
            delegateRegistration: 400000,
            vote: 100,
            multiSignature: 500,
            ipfs: 250,
            timelockTransfer: 500,
            multiPayment: 500,
            delegateResignation: 400000,
        },
    },
};

export const setUp = async () => {
    return await setUpContainer({
        exit: "@blockpool-io/core-blockchain",
        exclude: ["@blockpool-io/core-transaction-pool"],
        network: "unitnet",
    });
};

export const setUpFull = async () => {
    await setUpContainer({
        exit: "@blockpool-io/core-transaction-pool",
        exclude: ["@blockpool-io/core-transaction-pool"],
        network: "unitnet",
    });

    await registerWithContainer(require("../../../../packages/core-transaction-pool/src/plugin").plugin, options);

    // now registering the plugins that need to be registered after transaction pool
    // register p2p
    await registerWithContainer(require("@blockpool-io/core-p2p").plugin, {
        host: "0.0.0.0",
        port: 4000,
        minimumNetworkReach: 5,
        coldStart: 5,
    });
    await registerWithContainer(require("@blockpool-io/core-blockchain").plugin, {});
    return app;
};

export const tearDown = async () => {
    await app.tearDown();
};

export const tearDownFull = async () => {
    await require("../../../../packages/core-transaction-pool/src/plugin").plugin.deregister(app, options);
    await require("@blockpool-io/core-p2p").plugin.deregister(app, {});
    await require("@blockpool-io/core-blockchain").plugin.deregister(app, {});

    await app.tearDown();
};
