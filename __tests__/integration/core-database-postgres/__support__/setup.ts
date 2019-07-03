import { app } from "@blockpool-io/core-container";
import { registerWithContainer, setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(60000);

const options = {
    connection: {
        host: "localhost",
        port: 5432,
        database: "core_unitnet",
        user: "core",
        password: "password",
    },
};

export const setUp = async () => {
    await setUpContainer({
        exit: "@blockpool-io/core-database-postgres",
        exclude: ["@blockpool-io/core-database-postgres"],
    });

    // register first core-database because core-database-postgres extends it
    // (we might improve registerWithContainer to take care of extends)
    const { plugin: pluginDatabase } = require("@blockpool-io/core-database");
    await registerWithContainer(pluginDatabase, options);

    const { plugin } = require("../../../../packages/core-database-postgres/src/plugin");
    await registerWithContainer(plugin, options);
};

export const tearDown = async () => {
    await app.tearDown();

    const { plugin } = require("../../../../packages/core-database-postgres/src/plugin");
    await plugin.deregister(app, options);
};
