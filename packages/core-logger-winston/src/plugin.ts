import { Container } from "@blockpool-io/core-interfaces";
import { LoggerManager } from "@blockpool-io/core-logger";
import { defaults } from "./defaults";
import { WinstonLogger } from "./driver";

export const plugin: Container.PluginDescriptor = {
    pkg: require("../package.json"),
    defaults,
    alias: "logger",
    extends: "@blockpool-io/core-logger",
    async register(container: Container.IContainer, options) {
        return container.resolvePlugin<LoggerManager>("log-manager").createDriver(new WinstonLogger(options));
    },
};
