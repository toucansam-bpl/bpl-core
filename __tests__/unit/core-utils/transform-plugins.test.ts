import "jest-extended";

import { Plugins } from "../../../packages/core-utils/src";
import * as plugins from "../../utils/config/unitnet/plugins.js";

describe("transformPlugins", () => {
    it("should be ok", () => {
        const transformed = Plugins.transformPlugins(plugins);

        expect(transformed).toEqual({
            "@blockpool-io/core-api": {
                enabled: true,
                port: 4003,
            },
            "@blockpool-io/core-exchange-json-rpc": {
                enabled: false,
                port: 8080,
            },
            "@blockpool-io/core-webhooks": {
                enabled: false,
                port: 4004,
            },
        });
    });
});
