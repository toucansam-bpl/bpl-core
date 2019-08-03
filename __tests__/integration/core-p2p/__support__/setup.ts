import { app } from "@blockpool-io/core-container";
import { registerWithContainer, setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(60000);

const options = {
    host: "0.0.0.0",
    port: 4000,
    minimumNetworkReach: 5,
};

export const setUp = async () => {
    await setUpContainer({
        exit: "@blockpool-io/core-p2p",
        exclude: ["@blockpool-io/core-p2p"],
    });

    // register p2p plugin
    process.env.CORE_ENV = "test";
    await registerWithContainer(require("../../../../packages/core-p2p/src/plugin").plugin, options);
    await registerWithContainer(require("@blockpool-io/core-blockchain").plugin, {});
};

export const tearDown = async () => {
    await require("@blockpool-io/core-blockchain").plugin.deregister(app, {});
    await require("../../../../packages/core-p2p/src/plugin").plugin.deregister(app, options);

    await app.tearDown();
};

export const setUpFull = async () => {
    await setUpContainer({
        exit: "@blockpool-io/core-blockchain",
    });
};

export const tearDownFull = async () => {
    await app.tearDown();
};
