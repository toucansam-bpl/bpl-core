import { Container } from "@toucansam-bpl/core-interfaces";
import { LoggerManager } from "@toucansam-bpl/core-logger";
import { defaults } from "./defaults";
import { WinstonLogger } from "./driver";

export const plugin: Container.PluginDescriptor = {
    pkg: require("../package.json"),
    defaults,
    alias: "logger",
    extends: "@toucansam-bpl/core-logger",
    async register(container: Container.IContainer, options) {
        return container.resolvePlugin<LoggerManager>("log-manager").createDriver(new WinstonLogger(options));
    },
};
